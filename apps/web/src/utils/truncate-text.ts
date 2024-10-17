export function truncateText(text: string, numWords: number): string {
  const words = text.split(" ");
  
  if (words.length <= numWords) {
    return text;
  }

  const truncatedText = words.slice(0, numWords).join(" ");
  return `${truncatedText}...`;
}