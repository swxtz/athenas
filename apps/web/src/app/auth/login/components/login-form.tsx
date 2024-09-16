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

const formSchema = z.object({
  email: z
    .string({ message: "Esse campo é obrigatorio" })
    .email("Digite um e-mail válido"),
  password: z
    .string({ message: "Esse campo é obrigatorio" })
    .min(8, "A senha deve ter no mínimo 8 caracteres"),
});

type FormValues = z.infer<typeof formSchema>;

export function LoginForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const { toast } = useToast();

  function handleSubmit(values: FormValues) {
    console.log(values);

    setCookie(null, "login-token-email", values.email, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });

    setCookie(null, "login-token-password", values.password, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
    toast({
      title: "Usuário logado com sucesso!",
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="flex
         flex-col 
         ml-36
         w-2/3
         gap-5
         mt-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input
                    className="
                  h-10
                  w-full
                  rounded-none
                  " 
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
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input
                    className="
                   h-10
                   w-full
                   rounded-none
                   " 
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

          <Button type="submit" variant={"primary"} className="
          w-2/4
          h-12
          rounded-full">
            {" "}
            Entrar{" "}
          </Button>
        </div>
      </form>
    </Form>
  );
}
