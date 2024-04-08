#![allow(unused_imports, unused_variables)]
use actix_cors::Cors;
use actix_web::{
    get, http::header::ContentType, post, web, App, HttpResponse, HttpServer, Responder,
};
use polars::prelude::*;
use serde::{Deserialize, Serialize};

mod polars_examples;

#[derive(Serialize, Deserialize, Debug)]
struct W {
    a: i32,
    b: i32,
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        let cors = Cors::permissive();

        App::new().wrap(cors).service(polars_all_data)
        // .service(echo)
        // .route("/hey", web::get().to(manual_hello))
    })
    .bind(("127.0.0.1", 3001))?
    .run()
    .await
}

#[get("/polars_all_data")]
async fn polars_all_data() -> impl Responder {
    HttpResponse::Ok().body(polars_examples::all_data_handler())
}

// #[get("/")]
// async fn polars_all_data() -> impl Responder {
//     HttpResponse::Ok().body("Hello world!")
// }

#[post("/echo")]
async fn echo(req_body: String) -> impl Responder {
    HttpResponse::Ok().body(req_body)
}

async fn manual_hello() -> impl Responder {
    let version = std::env::var("PATH_TO_ORGANIZATION_CSV");
    println!("{:?}", version.unwrap());

    let filepath = "data/test.csv";
    let df = CsvReader::from_path(std::env::var("PATH_TO_ORGANIZATION_CSV").unwrap())
        .unwrap()
        .finish();
    // assert_eq!(df.shape(), (100, 9));

    // let df = df![
    //   "Fruit" => ["Apple", "Banana", "Pear", "Strawberry"],
    //   "Color" => ["red", "yellow", "green", "red"],
    //   "Purchased" => [20, 40, 100, 10]
    // ];

    let mut buf = Vec::new();
    let x = JsonWriter::new(&mut buf)
        .with_json_format(JsonFormat::Json)
        .finish(&mut df.unwrap());

    // https://docs.rs/polars/latest/polars/prelude/struct.JsonWriter.html
    let result = match x {
        Ok(()) => String::from(std::str::from_utf8(&buf).unwrap()),
        _ => "[]".to_string(),
    };

    //let foo = String::from(std::str::from_utf8(&buf).unwrap());

    HttpResponse::Ok()
        .insert_header(ContentType::json())
        .body(result)
}
