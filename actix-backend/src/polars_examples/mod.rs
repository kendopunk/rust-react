#![allow(dead_code, rustdoc::invalid_html_tags)]

use polars::prelude::*;

///
/// Convert a Vec<u8> to JSON using the DataFrame
///
fn vec_to_json(buffer: &mut Vec<u8>, df: &mut DataFrame) -> Result<(), PolarsError> {
    let result = JsonWriter::new(buffer)
        .with_json_format(JsonFormat::Json)
        .finish(df);

    result
}

/// Return all data from organizations-100.csv
///
/// # Examples
///
/// ```
/// let s: String = all_data_handler()
/// ```
pub fn all_data_handler() -> String {
    let df: Result<DataFrame, PolarsError> =
        CsvReader::from_path(std::env::var("PATH_TO_ORGANIZATION_CSV").unwrap())
            .unwrap()
            .finish();

    let mut buf = Vec::new();
    let json = vec_to_json(&mut buf, &mut df.unwrap());

    // https://docs.rs/polars/latest/polars/prelude/struct.JsonWriter.html
    let result = match json {
        Ok(()) => String::from(std::str::from_utf8(&buf).unwrap()),
        _ => "[]".to_string(),
    };

    result
}

/// Return only certain columns from organizations-100.csv
///
/// # Examples
///
/// ```
/// let s: String = select_columns_handler()
/// ```
pub fn select_columns_handler() -> String {
    let df = CsvReader::from_path(std::env::var("PATH_TO_ORGANIZATION_CSV").unwrap())
        .unwrap()
        .finish();

    let mut buf = Vec::new();
    let json = vec_to_json(
        &mut buf,
        &mut df
            .unwrap()
            .select(["organizationId", "name", "industry", "numEmployees"])
            .unwrap(),
    );

    let result = match json {
        Ok(()) => String::from(std::str::from_utf8(&buf).unwrap()),
        _ => "[]".to_string(),
    };

    result
}

/// Aggregations - count occurences of founding date
///
/// # Examples
///
/// ```
/// let s: String = agg_count_handler()
/// ```
pub fn agg_count_handler() -> String {
    let df = CsvReader::from_path(std::env::var("PATH_TO_ORGANIZATION_CSV").unwrap())
        .unwrap()
        .finish();

    let mut founded_agg_df = df
        .as_ref()
        .unwrap()
        .clone()
        .lazy()
        .group_by(["founded"])
        .agg([col("founded").count().alias("countFounded")])
        .sort(
            "countFounded",
            SortOptions {
                descending: true,
                nulls_last: true,
                ..Default::default()
            },
        )
        .collect()
        .unwrap();

    let mut buf = Vec::new();
    let json = vec_to_json(&mut buf, &mut founded_agg_df);

    let result = match json {
        Ok(()) => String::from(std::str::from_utf8(&buf).unwrap()),
        _ => "[]".to_string(),
    };

    result
}

/// Aggregations - count total employees for select industry categories
///
/// # Examples
///
/// ```
/// let s: String = agg_filter_handler()
/// ```
pub fn agg_filter_handler() -> String {
    let df = CsvReader::from_path(std::env::var("PATH_TO_ORGANIZATION_CSV").unwrap())
        .unwrap()
        .finish();

    let mut agg_filter_df = df
        .as_ref()
        .unwrap()
        .clone()
        .lazy()
        .group_by(["industry"])
        .agg([col("numEmployees").sum().alias("totalNumEmployees")])
        .filter(
            col("industry")
                .eq(lit("Textiles"))
                .or(col("industry").eq(lit("Consumer Electronics")))
                .or(col("industry").eq(lit("Military Industry"))),
        )
        .sort(
            "totalNumEmployees",
            SortOptions {
                descending: true,
                nulls_last: true,
                ..Default::default()
            },
        )
        .collect()
        .unwrap();

    let mut buf = Vec::new();
    let json = vec_to_json(&mut buf, &mut agg_filter_df);

    let result = match json {
        Ok(()) => String::from(std::str::from_utf8(&buf).unwrap()),
        _ => "[]".to_string(),
    };

    result
}
