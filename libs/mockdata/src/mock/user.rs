use std::fs::File;
use std::io::Write;
use rand::seq::SliceRandom;
use rand::thread_rng;
use serde::Serialize;
use crate::data::names::NAMES;
use crate::utils::available_threads::available_threads;
use crate::utils::nanoid::nanoid;
use crate::utils::random_string::generate_random_string;

#[derive(Serialize)]
pub struct UserJson {
    pub email: String,
    pub name: String,
    pub password: String,
}

pub fn random_names() -> String {

    let mut rng = thread_rng();

    let first_name = NAMES.choose(&mut rng).unwrap();
    let second_name = NAMES.choose(&mut rng).unwrap();

    return format!("{} {}", first_name, second_name);
}

pub fn random_email() -> String {

    let id = nanoid();
    let at = "seedmock.com";

    return format!("{}@{}", id, at);
}

pub fn random_password() -> String {
    let password = generate_random_string(10, 40);
    return password;
}

pub fn generate_user_mock(num_size: usize) {
    available_threads();
    let mut user_json = Vec::new();

    for _ in 0..num_size {
        user_json.push(UserJson {
            name: random_names(),
            email: random_email(),
            password: random_password(),
        })
    }

    let json = serde_json::to_string_pretty(&user_json).expect("Falha ao serializar para JSON");

    let mut file = File::create("output.json").expect("Falha ao criar o arquivo JSON");
    file.write_all(json.as_bytes())
        .expect("Falha ao escrever no arquivo");
}
