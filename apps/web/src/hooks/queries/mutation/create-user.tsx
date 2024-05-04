import { useToast } from "@/components/ui/use-toast";
import { api } from "@/lib/axios";
import type { Login } from "@/pages/login/components/login-form";
import { useMutation } from "@tanstack/react-query";

async function postUser(data: Login) {
  const res = await api.post("/auth", data);
  return res.data;
}

export function useMutationCreateUser() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: postUser,
    mutationKey: ["create-user"],

    onError: (err: ApiError) => {

      console.log(err);
      toast({
        title: "Ops... Alguma coisa deu errado",
        description: err.response.data.message,
        variant: "destructive",
      });

    }
  });
}