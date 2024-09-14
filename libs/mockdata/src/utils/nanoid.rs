use nanoid::nanoid;

pub fn nanoid() -> String {
    let dicionary: &[char] = &('a'..='z').chain('0'..='9').collect::<Vec<char>>();

    let id = nanoid!(15, dicionary);

    return id;
}
