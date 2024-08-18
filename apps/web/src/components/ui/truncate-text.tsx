import { HTMLAttributes } from "react";

interface TruncatedTextProps extends HTMLAttributes<HTMLSpanElement> {
  text: string;
  maxLength: number;
}

export function TruncateText({ text, maxLength, ...props }: TruncatedTextProps) {
  const truncatedText =
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

  return <span {...props}>{truncatedText}</span>;
}
