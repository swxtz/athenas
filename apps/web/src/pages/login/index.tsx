import { useDocumentTitle } from "@/hooks/use-document-title";
import { Separator } from "@/components/ui/separator";
import { LoginForm } from "./components/login-form";

export function LoginPage() {
  useDocumentTitle("invite.me | Entre com sua conta");

  return (
    <main>
      <div className="h-screen my-24 flex items-center justify-center">
        <div className="bg-zinc-900/40 py-12 w-[500px] rounded-2xl">
          <div>
            <h2 className="text-2xl text-center">Crie sua conta</h2>
              <LoginForm />
            <div className="flex justify-center mt-4">
              <Separator className="w-3/5 " />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
