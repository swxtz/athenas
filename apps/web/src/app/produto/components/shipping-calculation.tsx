import { IoFlashOutline } from "react-icons/io5";

export function ShinppingCalculation () {
    return(
        <>
            <div className="border p-1">
                <div>
                    <div className="flex flex-row">
                        <p className="text-lg font-semibold text-green-500	">Calcule seu frete</p> 
                        <IoFlashOutline className="text-green-500 align-text-bottom"
                        size={25} />
                    </div>
                    
                    <p className="text-xs text-sky-400">e acompanhe seu pedido ate sua entrega</p>
                    <p className="text-xs  font-semibold">ou</p>
                    <p className="text-xs text-sky-400">retire seu produto fisicamente na loja</p>
                </div>
                <div>
                    <div>
                        <button>

                        </button>
                    </div>
                    <div>
                        <button>

                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}