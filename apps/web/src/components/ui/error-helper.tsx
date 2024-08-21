import { ReactNode } from "react";

interface ErrorHelperProps {
  children: ReactNode;
}

export function ErrorHelper({ children }: ErrorHelperProps) {
  return (
    <span className="text-red-500 text-sm font-medium">{children}</span>
  );
  
}
