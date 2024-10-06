import { Separator } from "@/components/ui/separator";
import { LoginForm } from "./components/login-form";
import Image from "next/image";
import imageLogin from "@/images/interation-login.png";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <div className="w-full shadow-inner rounded-lg container py-9 text-2xl flex flex-col ">
      <div className="w-full ">
        {/* <Image
          src={imageLogin}
          alt="iconLog"
          width={700}
          height={700}
          className="w-96 l-40"
        /> */}
      </div>

      <div className=" w-full container text-center flex flex-col gap-4">
        <h2 className="font-semibold container text-x2l">
          Bem-vindo de volta!
        </h2>
        <h3 className="font-semibold flex w-full text-xs">Acesse sua conta</h3>

        <LoginForm />

        <div className="flex flex-row gap-2">
          <Separator className="my-4 bg-amber-800 w-32" />
          <p className="text-sm flex items-center">ou</p>
          <Separator className="my-4 bg-amber-800 w-32" />
        </div>

        <div className="justify-center flex w-full bg-slate-300">
          <FcGoogle size={52} />
        </div>
        {/* icons */}
      </div>
    </div>
  );
}
