import Image from "next/image";
import BannerImage from "@/images/burguer2.png";

export function BannerMain() {
  return(
    <div className="flex container w-full ">
      <Image
        className="mx-auto" 
        src={BannerImage} 
        alt="" 
        width={1000} 
        height={100}/> 
    </div>
  );
}