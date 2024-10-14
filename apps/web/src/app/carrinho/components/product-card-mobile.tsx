import Image from "next/image";

interface ProductCardMobileProps {
  name: string;
  coverImage: string;
}

export function ProductCardMobile({
  name,
  coverImage,
}: ProductCardMobileProps) {
  return (
    <div className="">
      <div className="flex items-center justify-center h-full">
        <Image
          src={coverImage}
          alt={name}
          width={400}
          height={400}
          className="w-[50px] object-contain mx-auto rounded-xl"
        />
      </div>
    </div>
  );
}
