use clap::Parser;
use serde::Serialize;
use serde_json::json;
use crate::mock::user::UserJson;

#[derive(Parser)]
pub struct Cli {
    num_size: usize,
}



pub fn cli() {
    let args = Cli::parse();

    let mut user_json = Vec::new();

    for i in 0..args.num_size {
        user_json.push(UserJson {

        })
    }
}

