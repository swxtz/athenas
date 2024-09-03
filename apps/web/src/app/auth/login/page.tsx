import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { LoginForm } from "./components/login-form";
import Image from "next/image";


export default function LoginPage() {
  return (
    <div className="mt-12 py-8 w-1/2 rounded shadow bg-slate-800">
      <div className="w-1/2  ">
        <Image src={""} alt={""}/>
      </div>
      <div className="bg-slate-400">
        <h2 className="text-center font-semibold text-xl ">Bem-vindo de volta!</h2>
        <Separator className="w-4/5 my-4 mx-auto" />
        <LoginForm />
      </div>
    </div>
  );
}
