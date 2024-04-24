import type { ReactNode } from "react";

interface InputErrorProps {
  children: ReactNode;
}

export function InputError({ children }: InputErrorProps) {
  return <p className="text-red-700 text-sm">{children}</p>;
}