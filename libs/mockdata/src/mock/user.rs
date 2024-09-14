use serde::Serialize;

#[derive(Serialize)]
pub struct UserJson {
    email: String,
    name: String,
    password: String,
}