use crate::data::names::NAMES;
use crate::utils::nanoid::nanoid;
use rand::seq::SliceRandom;
use rand::thread_rng;
use serde::Serialize;

#[derive(Serialize)]
pub struct UserJson {
    pub email: String,
    pub name: String,
    // pub password: String,
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
