#![allow(unused_imports, unused_variables, dead_code)]
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

        App::new()
            .wrap(cors)
            .service(all_data)
            .service(select_columns)
            .service(agg_count)
            .service(agg_filter)
    })
    .bind(("127.0.0.1", 3001))?
    .run()
    .await
}

#[get("/polars_all_data")]
async fn all_data() -> impl Responder {
    HttpResponse::Ok()
        .insert_header(ContentType::json())
        .body(polars_examples::all_data_handler())
}

#[get("/polars_select_columns")]
async fn select_columns() -> impl Responder {
    HttpResponse::Ok()
        .insert_header(ContentType::json())
        .body(polars_examples::select_columns_handler())
}

#[get("/polars_agg_count")]
async fn agg_count() -> impl Responder {
    HttpResponse::Ok()
        .insert_header(ContentType::json())
        .body(polars_examples::agg_count_handler())
}

#[get("/polars_agg_filter")]
async fn agg_filter() -> impl Responder {
    HttpResponse::Ok()
        .insert_header(ContentType::json())
        .body(polars_examples::agg_filter_handler())
}
