use rand::thread_rng;
use rand::seq::SliceRandom;
use serde::Serialize;

#[derive(Serialize)]
pub struct UserJson {
    // email: String,
    pub name: String,
    // password: String,
}

pub fn random_names() -> String {

    let names = vec!["João", "Maria", "Pedro", "Ana", "Carlos", "Fernanda"];

    let mut rng = thread_rng();

    let first_name = names.choose(&mut rng).unwrap();
    let second_name = names.choose(&mut rng).unwrap();

   format!("{} {}", first_name, second_name)

}