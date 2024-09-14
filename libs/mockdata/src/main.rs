use crate::cli::cli;
use crate::utils::clean_terminal::clean_terminal;

mod cli;
mod data;
mod mock;
mod utils;

fn main() {
    clean_terminal();
    cli();
}
