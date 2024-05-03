import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InputError } from "@/components/ui/input-error";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(255),
  });

  type Login = z.infer<typeof loginSchema>;

  const form = useForm<Login>({
    resolver: zodResolver(loginSchema)
  });

  function handleLogin(data: Login) {
    console.log(data);
  }

  function tooglePassword() {
    setShowPassword(!showPassword);
  }

  return (
    <>
      <Form {...form}>
        <div className="flex flex-col gap-4 mt-8">
          <form onSubmit={form.handleSubmit(handleLogin)}>
            <div className="w-3/5 mx-auto flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                {/* Input Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full mx-auto">
                      <FormLabel>E-mail</FormLabel>
                      <FormControl {...field}>
                        <Input placeholder="john@doe.com" />
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
                          {showPassword ? (
                            <Eye className="opacity-80 text-zinc-600" />
                          ) : (
                            <EyeOff className="opacity-80 text-zinc-600" />
                          )}
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
              </div>

              <Button type="submit" className="w-full">
                Entrar
              </Button>
            </div>

          </form>
        </div>
      </Form>
    </>
  );
}