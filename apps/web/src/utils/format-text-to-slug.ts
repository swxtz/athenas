

/**
 * Formata um texto para caixa baixa e troca os espaços por hífens.
 * @param text - Texto a ser formatado.
 * @returns - Texto formatado.
 */
export function formatTextToSlug(text: string): string {
  const textLowerCase = text.toLowerCase();
  const formattedText = textLowerCase.replace(/\s+/g, "-");
  return formattedText;
}
