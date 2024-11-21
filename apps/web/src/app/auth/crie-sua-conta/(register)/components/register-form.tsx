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
import { useMutationCreateUser } from "@/hooks/mutations/create-user";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
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

export type FormValues = z.infer<typeof formSchema>;

export function RegisterForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });
  const { mutate } = useMutationCreateUser();

  function handleSubmit(values: FormValues) {
    mutate(values);
    setTimeout(() => {
      redirect(`/auth/verifique-seu-email?email=${encodeURI(values.email)}`);
    }, 3000);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="flex flex-col gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex w-full" >Nome Completo</FormLabel>
                <FormControl>
                  <Input 
                    type="text" 
                    className="h-10 rounded-none"
                    placeholder="Nome e sobrenome" 
                    {...field} />
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
                <FormLabel className="flex w-full">E-mail</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="" 
                    className="h-10 rounded-none"
                    {...field} />
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
                    type="password" 
                    placeholder="••••••••" 
                    className="h-10 rounded-none"
                    {...field} />
                </FormControl>

                {form.formState.errors.password && (
                  <ErrorInputDisplay>
                    {form.formState.errors.password.message}
                  </ErrorInputDisplay>
                )}
              </FormItem>
            )}
          />
          <div className="w-full flex">
            <input type="checkbox" name="" id="" />
            <p className="md:text-xs text-[10px] leading-3	 text-slate-400 flex m-1">Eu li e concordo com os Termos de Privacidade e estou ciente de como minhas informações serão utilizadas.</p>
          </div>    
          <Button
            type="submit"
            variant={"primary"}
            className=" h-12 rounded-full"
          >
            {" "}
            Criar conta{" "}
          </Button>
          
        </div>
      </form>
    </Form>
  );
}
