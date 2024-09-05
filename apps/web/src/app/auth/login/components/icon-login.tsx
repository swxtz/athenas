import interationLog from "@/images/interation-login.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export interface InterationLogin {
    image: string | StaticImport;
}

const interation: InterationLogin = {
  image: interationLog
};