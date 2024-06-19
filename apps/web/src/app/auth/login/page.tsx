import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { LoginForm } from "./components/login-form";

export default function LoginPage() {
  return (
    <div className="mt-12 container py-8 w-96 rounded shadow bg-slate-100">
      <h2 className="text-center font-semibold text-xl">Bem-vindo de volta!</h2>
      <Separator className="w-4/5 my-4 mx-auto" />
      <LoginForm />
    </div>
  );
}
