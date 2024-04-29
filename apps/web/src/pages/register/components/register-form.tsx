import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InputError } from "@/components/ui/input-error";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  //const todayDate = new Date().toISOString().split("T")[0].toString;

  const createAccountSchema = z
    .object({
      name: z.string().min(2).max(255),
      email: z.string().email(),
      password: z.string().min(8).max(255),
      confirmPassword: z.string().min(8).max(255),
      document: z.string().min(11).max(12),
      //birthdate: z.date(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "As senhas não coincidem",
    });
  type CreateAccount = z.infer<typeof createAccountSchema>;

  const form = useForm<CreateAccount>({
    resolver: zodResolver(createAccountSchema),
  });

  function tooglePassword() {
    setShowPassword(!showPassword);
  }

  function handleCreateAccount(data: CreateAccount) {
    console.log(data);
  }
  return (
    <div className="">
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
                          {showPassword ? (
                            <Eye className="opacity-80 text-zinc-600" />
                          ) : (
                            <EyeOff className="opacity-80 text-zinc-600" />
                          )}
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

                {/* Input Document */}
                <FormField
                  control={form.control}
                  name="document"
                  render={({ field }) => (
                    <FormItem className="w-full mx-auto">
                      <FormLabel>Documento</FormLabel>
                      <div className="flex flex-row">
                        <FormControl {...field}>
                          <Input placeholder="000-000-000.00" />
                        </FormControl>
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
                {/* <FormField
                      control={form.control}
                      name="birthdate"
                      render={({ field }) => (
                        <FormItem className="w-full mx-auto">
                          <FormLabel>Data de nascimento</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl {...field}>
                                <Button
                                  type="button"
                                  variant={"outline"}
                                  className={cn(
                                    "w-[240px] pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>

                            <PopoverContent>
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date > new Date() ||
                                  date < new Date("1900-01-01")
                                }
                              />
                            </PopoverContent>
                          </Popover>
                          {form.formState.errors.name && (
                            <InputError>
                              {form.formState.errors.name.message}
                            </InputError>
                          )}
                        </FormItem>
                      )}
                    /> */}
              </div>

              <Button type="submit" className="w-full">
                Criar conta
              </Button>
            </div>
          </form>
        </div>
      </Form>
    </div>
  );
}
