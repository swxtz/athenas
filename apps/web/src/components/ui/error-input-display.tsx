import type { ReactNode } from "react";

interface InputErrorProps {
  children: ReactNode;
}

export function ErrorInputDisplay({ children }: InputErrorProps) {
  return <p className="flex-initial flex text-red-700 text-sm">{children}</p>;
}