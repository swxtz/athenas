"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ErrorInputDisplay } from "@/components/ui/error-input-display";
import { useToast } from "@/components/ui/use-toast";
import { setCookie } from "nookies";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z
    .string({ message: "Esse campo é obrigatório" })
    .email("Digite um e-mail válido"),
  password: z
    .string({ message: "Esse campo é obrigatório" })
    .min(8, "A senha deve ter no mínimo 8 caracteres"),
});

type FormValues = z.infer<typeof formSchema>;

export function LoginForm() {
  const router = useRouter();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const { toast } = useToast();

  async function handleSubmit(values: FormValues) {
    const result = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (result?.error) {
      toast({
        title: "Email ou senha inválidos",
        description: "Verifique suas credenciais e tente novamente",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Usuário logado com sucesso!",
    });

    router.push("/");
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="flex flex-col gap-5 ">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex w-full">E-mail</FormLabel>
                <FormControl>
                  <Input
                    className="h-10  rounded-none"
                    type="email"
                    placeholder="digite seu e-mail aqui"
                    {...field}
                  />
                </FormControl>

                {form.formState.errors.email && (
                  <ErrorInputDisplay>
                    {form.formState.errors.email.message}
                  </ErrorInputDisplay>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex w-full">Senha</FormLabel>
                <FormControl>
                  <Input
                    className="h-10 rounded-none"
                    type="password"
                    placeholder="••••••••"
                    {...field}
                    autoComplete="password"
                  />
                </FormControl>

                {form.formState.errors.password && (
                  <ErrorInputDisplay>
                    {form.formState.errors.password.message}
                  </ErrorInputDisplay>
                )}
              </FormItem>
            )}
          />
          <div>
            <p className="w-full flex text-xs">esqueceu sua senha?</p>
          </div>

          <Button
            type="submit"
            variant={"primary"}
            className=" h-12 rounded-full"
          >
            {" "}
            Entrar{" "}
          </Button>
        </div>
      </form>
    </Form>
  );
}
