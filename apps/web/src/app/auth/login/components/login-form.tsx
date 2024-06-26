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

const formSchema = z.object({
  email: z.string({ message: "Esse campo é obrigatorio" }).email("Digite um e-mail válido"),
  password: z.string({ message: "Esse campo é obrigatorio" }).min(8, "A senha deve ter no mínimo 8 caracteres"),
});

type FormValues = z.infer<typeof formSchema>;

export function LoginForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  function handleSubmit(values: FormValues) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="joãodetal@exemplo.com" {...field} />
                </FormControl>

                {form.formState.errors.email && (
                  <ErrorInputDisplay>{form.formState.errors.email.message}</ErrorInputDisplay>
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
                  <Input type="password" placeholder="********" {...field} autoComplete="password" />
                </FormControl>

                {form.formState.errors.password && (
                  <ErrorInputDisplay>{form.formState.errors.password.message}</ErrorInputDisplay>
                )}
              </FormItem>
            )}
          />

          <Button type="submit" variant={"default"} className="">Entrar</Button>
        </div>
      </form>
    </Form>
  );
}
