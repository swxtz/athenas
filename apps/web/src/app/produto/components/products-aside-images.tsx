import Image from "next/image";

interface ProductAsideImagesProps {
    coverImage: string,
    name: string
}

export function ProductAsideImages( {coverImage, name}: ProductAsideImagesProps ) {
    return (
        <Image src={coverImage} alt={name} width={100} height={100} className="h-[75px] md:h-[150px] max-w-full object-contain" />    
    )
}