use std::fs::File;
use std::io::{self, Write};
use clap::Parser;
use crate::mock::user::{random_names, UserJson};

#[derive(Parser)]
pub struct Cli {
    num_size: usize,
}



pub fn cli() {
    let args = Cli::parse();

    let mut user_json = Vec::new();

    for i in 0..args.num_size {
        user_json.push(UserJson {
            name: random_names()
        })
    }

    let json = serde_json::to_string_pretty(&user_json).expect("Falha ao serializar para JSON");

    let mut file = File::create("output.json").expect("Falha ao criar o arquivo JSON");
    file.write_all(json.as_bytes()).expect("Falha ao escrever no arquivo");
}
