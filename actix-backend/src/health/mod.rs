#![allow(dead_code)]

use actix_web::web::{self, Json};
use serde_json::{json, Value};

pub fn health_check_handler() -> Json<Value> {
    let response = json!({
      "status": 200,
      "message": "actix-web backend is healthy"
    });

    web::Json(response)
}
