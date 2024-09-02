"use client";

import { useToast } from "@/components/ui/use-toast";
import { api } from "@/lib/axios";
import { CreateUserPayload } from "@/types/create-user";
import { useMutation } from "@tanstack/react-query";

async function createUser(data: CreateUserPayload) {
  const res = await api.post("/users", data);
  return res;
}

export function useMutationCreateUser() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: createUser,
    mutationKey: ["createUser"],
    onSuccess: () => {
      toast({
        title: "Usuário criado com sucesso",
        description: "Por favor, verifique seu e-mail para confirmar sua conta!",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Erro ao criar usuário",
        description: "Por favor tente mais tarde.",
        variant: "destructive",
      });
      console.error(error);
    },
  });

}