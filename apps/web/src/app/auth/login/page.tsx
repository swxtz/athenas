import { Separator } from "@/components/ui/separator";
import { LoginForm } from "./components/login-form";
import Image from "next/image";
import imageLogin from "@/images/interation-login.png";

export default function LoginPage() {
  return (
    <div
      className="
    w-full
    mt-12 
    container
    py-6
    text-2xl
    flex
  bg-zinc-100"
    >
      <div className="w-1/2 ">
        <h2
          className="text-center 
          pl-20
          font-semibold ">
          O melhor para o melhor </h2>
        <Image
          src={imageLogin}
          alt="iconLog"
          width={700}
          height={700}
          className="w-full ml-8"
        />
      </div>

      <div className="
        container">
        <h2
          className="
          text-center
          font-semibold
          text-xl">
          Bem-vindo de volta!
        </h2>
        <Separator className="
        w-3/5
        my-4
        mx-auto" />
        <LoginForm />
      </div>
    </div>
  );
}
