use polars::prelude::*;

/// Return all data from organizations-100.csv
///
/// # Examples
///
/// ```
/// let s: String = all_data_handler()
/// ```
pub fn all_data_handler() -> String {
    let df = CsvReader::from_path(std::env::var("PATH_TO_ORGANIZATION_CSV").unwrap())
        .unwrap()
        .finish();

    let mut buf = Vec::new();
    let x = JsonWriter::new(&mut buf)
        .with_json_format(JsonFormat::Json)
        .finish(&mut df.unwrap());

    // https://docs.rs/polars/latest/polars/prelude/struct.JsonWriter.html
    let result = match x {
        Ok(()) => String::from(std::str::from_utf8(&buf).unwrap()),
        _ => "[]".to_string(),
    };

    result
}
