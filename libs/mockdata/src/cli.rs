
use clap::{Parser, Subcommand};
use crate::mock::user::generate_user_mock;

#[derive(Parser)]
#[command(about = "Ferramenta de geração de mock data", long_about = None)]
struct Cli {
    /// Tipo de mock a ser gerado (ex: user, email)
    #[command(subcommand)]
    command: Commands,
}

#[derive(Subcommand)]
pub enum Commands {
    #[command(about = "Gera nomes de usuários aleatórios.", long_about = "Gera uma quantidade especificada de nomes de usuários com identificadores aleatórios.")]
    User {
    num_size: usize,
}
}

pub fn cli() {
    let cli = Cli::parse();
    
    match &cli.command {
        Commands::User { num_size } => generate_user_mock(num_size.clone())
    }


}
