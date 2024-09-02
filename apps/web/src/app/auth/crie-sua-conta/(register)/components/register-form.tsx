"use client";

import { Button } from "@/components/ui/button";
import { ErrorInputDisplay } from "@/components/ui/error-input-display";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z
    .string({ message: "Nome é obrigatório" })
    .max(255, { message: "Nome deve ter no máximo 255 caracteres" }),
  email: z
    .string({ message: "E-mail é obrigatório" })
    .email({ message: "E-mail inválido" }),
  password: z
    .string({ message: "Senha é obrigatória" })
    .min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
});

type FormValues = z.infer<typeof formSchema>;

export function RegisterForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  function handleSubmit(values: FormValues) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="flex flex-col space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome Completo</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="João da Silva" {...field} />
                </FormControl>

                {form.formState.errors.name && (
                  <ErrorInputDisplay>
                    {form.formState.errors.name.message}
                  </ErrorInputDisplay>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="joao@silva.com" {...field} />
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
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>

                {form.formState.errors.password && (
                  <ErrorInputDisplay>
                    {form.formState.errors.password.message}
                  </ErrorInputDisplay>
                )}
              </FormItem>
            )}
          />
          <Button type="submit" variant={"default"} className="">
            Entrar
          </Button>
        </div>
      </form>
    </Form>
  );
}
