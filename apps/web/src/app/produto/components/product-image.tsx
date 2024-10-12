import Image from "next/image";

    interface ProductImageProps{
        coverImage: string,
        name: string
    }

export function ProductImage( {coverImage, name}: ProductImageProps){
    return(
        <Image src={coverImage} alt={name} width={700} height={700} className="h-[75px] md:h-[350px] max-w-full object-contain" />
    )
}