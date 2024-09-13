import { Separator } from "@/components/ui/separator";
import { LoginForm } from "./components/login-form";
import Image from "next/image";
import imageLogin from "@/images/interation-login.png";

export default function LoginPage() {
  return (
    <div
    className="
    w-full
    h-full
    shadow-inner
    mt-32
    rounded-lg
    container
    py-9
    text-2xl
    flex
    "
    >
      <div className="
        w-1/2">

        <h2
          className="text-center 
          pl-20
          ml-2
          
          font-semibold ">
          O melhor para o melhor
        </h2>

        <Image
          src={imageLogin}
          alt="iconLog"
          width={700}
          height={700}
          className="
          w-96
          ml-40"
        />

      </div>

      <div className="
        ml-20
        w-2/3 ">
        <h2 className="
          font-semibold
          ml-36
          text-x2l">
          Bem-vindo de volta!
        </h2>
        <h3 className="
        font-semibold
        ml-36
        text-xs">
          Faça seu login e se junte conosco!
        </h3>

        <LoginForm />

        <div className="
          ml-20
          mt-5">
          <Separator className="
          w-2/3
          my-4
          bg-amber-800
          mx-auto" />
        </div>
        <div>
          <h2 className="
          font-semibold
          ml-80
          text-sm">
            Logar com
          </h2>
        </div>
        <div id="Icons"></div>
      </div>
    </div>
  );
}
