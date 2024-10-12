import Image from "next/image";
import { ProductBreadcrumb } from "./product-breadcrumb";
import { ProductAsideImages } from "./products-aside-images";
import { ProductImage } from "./product-image";

interface ProductDisplayDesktopProps {
    coverImage: string,
    name: string
}

export function ProductDisplayDesktop({ coverImage, name }: ProductDisplayDesktopProps) {
    return(
        <div className="bg-slate-400 container flex flex-col">
            <div className=""> 
                <ProductBreadcrumb />
            </div>
            <div className="flex">
                <div>
                    <div className=" bg-fuchsia-600 flex flex-col">
                        <ProductAsideImages coverImage={coverImage} name={name} />
                        <ProductAsideImages coverImage={coverImage} name={name} />
                        <ProductAsideImages coverImage={coverImage} name={name} />
                    </div>
                </div>
                <div className="bg-stone-500">
                    <div>
                        <ProductImage coverImage={coverImage} name={name}/>
                    </div>
                </div>
                <div>
                    <div>
                        <p>mais vendidos</p>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}