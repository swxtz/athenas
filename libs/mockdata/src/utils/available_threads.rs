use std::thread;

pub fn available_threads() -> usize {
    let num_threads = thread::available_parallelism()
        .map(|n| n.get())
        .unwrap_or(1);

    println!("Número de threads reais disponíveis: {}", num_threads);

    let adjusted_threads = if num_threads < 2 {
        1
    } else {
        num_threads - 2
    };

    println!("Número de threads seguras: {}", adjusted_threads);

    return adjusted_threads;
}