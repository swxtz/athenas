"use client";

import { useQueryState } from "nuqs";

export function Helper() {
  const [email, setEmail] = useQueryState("email");
  return (
    <p className="text-gray-600 mt-4 text-center">
      Enviamos um e-mail de confirmação para <span className="text-blue-800 underline">{email}</span>. Por favor, verifique sua
      caixa de entrada e clique no link de confirmação para ativar sua conta.
    </p>
  );
}
