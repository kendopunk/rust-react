use actix_web::web::{self, Json};
use fake::{
    faker::{
        address::raw::{CityName, StateName},
        boolean::en::Boolean,
        name::{en::LastName, raw::FirstName},
    },
    locales::EN,
    Dummy, Fake, Faker,
};
use serde::{ser::Error, Deserialize, Serialize};
use serde_json::{json, Value};

#[derive(Debug, Dummy, Serialize, Deserialize)]
pub struct CustomerOrder {
    #[dummy(faker = "1000..2000")]
    order_id: usize,
    first_name: String,
    last_name: String,
    city: String,
    state: String,
    shipped: bool,
}

pub fn serde_json_macro_handler() -> Json<Value> {
    let albums = json!({
        "albums":[
            {
                "title": "Thriller",
                "artist": "Michael Jackson",
                "release_date": 1982,
                "sold": 70_000_000,
            },
            {
                "title": "Back in Black",
                "artist": "AC/DC",
                "release_date": 1980,
                "sold": 50_000_000
            },
            {
                "title": "Their Greatest Hits",
                "artist": "The Eagles",
                "release_date": 1976,
                "sold": 45_000_000
            },
            {
                "title": "Metallica",
                "artist": "Metallica",
                "release_date": 1991,
                "sold": 31_000_000
            },
            {
                "title": "Appetite for Destruction",
                "artist": "Guns N' Roses",
                "release_date": 1987,
                "sold": 30_000_000
            },
            {
                "title": "Nevermind",
                "artist": "Nirvana",
                "release_date": 1991,
                "sold": 26_000_000
            },
            {
                "title": "Cracked Rear View",
                "artist": "Hootie & the Blowfish",
                "release_date": 1994,
                "sold": 20_000_000
            },
        ]
    });

    web::Json(albums)
}

pub fn serde_struct_json_handler() -> Value {
    let mut orders: Vec<CustomerOrder> = Vec::new();

    for n in 1..=11 {
        orders.push(CustomerOrder {
            order_id: Faker.fake(),
            first_name: FirstName(EN).fake(),
            last_name: LastName().fake(),
            city: CityName(EN).fake(),
            state: StateName(EN).fake(),
            shipped: Boolean(88).fake(),
        })
    }

    json!(orders)
}
