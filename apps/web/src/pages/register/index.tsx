import { Separator } from "@/components/ui/separator";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { RegisterForm } from "./components/register-form";


export function RegisterPage() {
  useDocumentTitle("invite.me | Crie sua conta");
  
  return (
    <main>
      <div className="h-screen my-24 flex items-center justify-center">
        <div className="bg-zinc-900/40 py-12 w-[500px] rounded-2xl">
          <div>
            <h2 className="text-2xl text-center">Crie sua conta</h2>
              <RegisterForm />
            <div className="flex justify-center mt-4">
              <Separator className="w-3/5 " />
            </div>
          </div>

          

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
