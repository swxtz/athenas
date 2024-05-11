import { useDocumentTitle } from "@/hooks/use-document-title";
import { Separator } from "@/components/ui/separator";
import { LoginForm } from "./components/login-form";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
export function LoginPage() {
  useDocumentTitle("invite.me | Entre com sua conta");

  const navigate = useNavigate();

  function redirectToRegister() {
    navigate("/register");
  }

  return (
    <main>
      <div className="h-screen my-24 flex items-center justify-center">
        <div className="bg-zinc-900/40 py-12 w-[500px] rounded-2xl">
          <div>
            <h2 className="text-2xl text-center">Bem vindo de volta!</h2>
            <LoginForm />
            <div className="flex justify-center mt-4">
              <Separator className="w-3/5 " />
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-4">
            <Separator className="w-1/5" />
            <span>ou</span>
            <Separator className="w-1/5" />
          </div>

          <div className="flex items-center justify-center mt-4">
            <Button
              variant={"link"}
              className="mx-auto"
              onClick={redirectToRegister}
            >
              Crie sua conta
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
