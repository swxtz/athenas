use rand::Rng;

/// Gera uma string aleatória contendo letras e números com tamanho dentro de um intervalo.
///
/// # Arguments
///
/// * `min_len` - Tamanho mínimo da string.
/// * `max_len` - Tamanho máximo da string.
///
/// # Returns
///
/// Uma string aleatória de tamanho entre `min_len` e `max_len`.
pub fn generate_random_string(min_len: usize, max_len: usize) -> String {
    // Definindo os caracteres permitidos (letras e números)
    let characters: Vec<char> = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        .chars()
        .collect();

    // Criando um gerador de números aleatórios
    let mut rng = rand::thread_rng();

    // Definindo o tamanho da string aleatória
    let string_length = rng.gen_range(min_len..=max_len);

    // Gerando a string aleatória
    let random_string: String = (0..string_length)
        .map(|_| characters[rng.gen_range(0..characters.len())])
        .collect();

    random_string
}
