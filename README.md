# rust-react

Using Rust and React together.

I began studying the [Polars](https://pola.rs/) data frame library a few months back (Feb 2024) and wanted to see if I could use it in a Rust web framework to pass DF information through to a React frontend.

Turns out I could...with the help of [Actix](https://actix.rs/).

I recently expanded the application to include some Serde implementations of serializing / deserializing.

## TL/DR

The repo has two parts - the backend Actix server (`actix-backend`) and the React application (`frontend`) taking advantage of some [Material UI](https://mui.com/material-ui/) components.

## Requirements

- Rust installed
- Understanding of `cargo`
- npm (or nvm) installed
- yarn installed

## Setting Up and Running actix-backend

```sh
# Cargo Watch watches over your project's source for changes, and runs Cargo commands when they occur.
$> cargo install cargo-watch
```

**CSV File Path**

The Polars examples read from a CSV file called `organizations-100.csv` located in `actix-backend/static`.

In `actix-backend/.cargo/config.toml`, please change the value of `PATH_TO_ORGANIZATION_CSV` to the full path as it appears on your filesystem.

```sh
# run the server
$> cd actix-backend
# may take a while to resolve all dependencies + build
$> cargo-watch -x run
# server will be running on http://localhost:3001
```

```sh
# generate documentation if you want
$> cd actix-backend
$> cargo doc --no-deps
```

## Setting Up and Running frontend

```sh
$> cd frontend
# if using nvm
$> nvm use
# install dependencies
$> yarn
$> yarn start
# open http://localhost:3000
```

## Troubleshooting

If you see this Polars error, try running `rustup update`

```
...physical_plan/executors/scan/csv.rs:21:18
   |
21 |             .map(Arc::unwrap_or_clone);
   |                  ^^^^^^^^^^^^^^^^^^^^
   |
   = note: see issue #93610 <https://github.com/rust-lang/rust/issues/93610> for more information
```

## @TODO / Future / Random Thoughts

- Integrate a database like Postgres, using [Diesel](https://diesel.rs/) or similar
- WebSockets examples
- GraphQL
