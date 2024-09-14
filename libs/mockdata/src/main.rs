use crate::cli::cli;
use crate::utils::available_threads::available_threads;

mod cli;
mod data;
mod mock;
mod utils;

fn main() {
    available_threads();
    cli()
}
