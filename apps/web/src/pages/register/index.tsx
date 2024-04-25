import { Separator } from "@/components/ui/separator";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { date, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InputError } from "@/components/ui/input-error";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export function RegisterPage() {
  useDocumentTitle("invite.me | Crie sua conta");

  const [showPassword, setShowPassword] = useState(false);
  const todayDate = new Date().toISOString().split("T")[0].toString;

  const createAccountSchema = z
    .object({
      name: z.string().min(2).max(255),
      email: z.string().email(),
      password: z.string().min(8).max(255),
      confirmPassword: z.string().min(8).max(255),
      birthdate: z.date(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "As senhas não coincidem",
    });
  type CreateAccount = z.infer<typeof createAccountSchema>;

  const form = useForm<CreateAccount>({
    resolver: zodResolver(createAccountSchema),
  });

  function handleCreateAccount(data: CreateAccount) {
    console.log(data);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function tooglePassword() {
    setShowPassword(!showPassword);
  }
  return (
    <main>
      <div className="h-screen my-24 flex items-center justify-center">
        <div className="bg-zinc-900/40 py-12 w-[500px] rounded-2xl">
          <div>
            <h2 className="text-2xl text-center">Crie sua conta</h2>

            <div className="flex justify-center mt-4">
              <Separator className="w-3/5 " />
            </div>
          </div>

          <Form {...form}>
            <div className="flex flex-col gap-4 mt-8">
              <form onSubmit={form.handleSubmit(handleCreateAccount)}>
                <div className="w-3/5 mx-auto flex flex-col gap-4">
                  <div className="flex flex-col gap-4">
                    {/* Input Name */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="w-full mx-auto">
                          <FormLabel>Nome</FormLabel>
                          <FormControl {...field}>
                            <Input placeholder="Jonh Doe" />
                          </FormControl>
                          {form.formState.errors.name && (
                            <InputError>
                              {form.formState.errors.name.message}
                            </InputError>
                          )}
                        </FormItem>
                      )}
                    />

                    {/* Input Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="w-full mx-auto">
                          <FormLabel>Email</FormLabel>
                          <FormControl {...field}>
                            <Input placeholder="jonh@doe.com" />
                          </FormControl>
                          {form.formState.errors.email && (
                            <InputError>
                              {form.formState.errors.email.message}
                            </InputError>
                          )}
                        </FormItem>
                      )}
                    />

                    {/* Input Password */}
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem className="w-[331px] mx-auto">
                          <FormLabel>Senha</FormLabel>
                          <div className="flex flex-row">
                            <FormControl {...field}>
                              <Input
                                type={showPassword ? "text" : "password"}
                                placeholder="********"
                              />
                            </FormControl>

                            <Button
                              type="button"
                              variant={"ghost"}
                              size={"icon"}
                              className="relative -left-10"
                              onClick={() => tooglePassword()}
                            >
                              {showPassword ? <Eye className="opacity-80 text-zinc-600" /> : <EyeOff className="opacity-80 text-zinc-600" />}
                            </Button>
                          </div>

                          {form.formState.errors.password && (
                            <InputError>
                              {form.formState.errors.password.message}
                            </InputError>
                          )}
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem className="w-[331px] mx-auto">
                          <FormLabel>Confirme sua senha</FormLabel>
                          <div className="flex flex-row">
                            <FormControl {...field}>
                              <Input
                                type={showPassword ? "text" : "password"}
                                placeholder="********"
                              />
                            </FormControl>

                            <Button
                              type="button"
                              variant={"ghost"}
                              size={"icon"}
                              className="relative -left-10"
                              onClick={() => tooglePassword()}
                            >
                              {showPassword ? <Eye className="opacity-80 text-zinc-600" /> : <EyeOff className="opacity-80 text-zinc-600" />}
                            </Button>
                          </div>
                          {form.formState.errors.confirmPassword && (
                            <InputError>
                              {form.formState.errors.confirmPassword.message}
                            </InputError>
                          )}
                        </FormItem>
                      )}
                    />

                    {/* Birthdate Name */}
                    <FormField
                      control={form.control}
                      name="birthdate"
                      render={({ field }) => (
                        <FormItem className="w-full mx-auto">
                          <FormLabel>Data de nascimento</FormLabel>
                          <FormControl {...field}>
                            <Input placeholder="Escolha uma data" />
                          </FormControl>
                          {form.formState.errors.name && (
                            <InputError>
                              {form.formState.errors.name.message}
                            </InputError>
                          )}
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Crir conta
                  </Button>
                </div>
              </form>
            </div>
          </Form>

          <div className="flex items-center justify-center gap-2 mt-4">
            <Separator className="w-1/5" />
            <span>ou</span>
            <Separator className="w-1/5" />
          </div>
        </div>
      </div>
    </main>
  );
}
