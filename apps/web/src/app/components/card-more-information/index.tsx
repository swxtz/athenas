export function InformationMore(){
    return(
        <div >
            <div className="bg-red-500 flex flex-col h-36 justify-center w-96 p-5 text-justify text-sm gap-1 text-gray-200 rounded-sm">
                <p className="">Quer receber promoções? </p>
                <input className="bg-red-100 border cursor-pointer text-sm p-2 text-gray-200 rounded-sm w-8/12 hover:bg-red-200 h-7" 
                type="text" 
                name="" 
                placeholder="Digite seu email " id="" />
                <p>Digite seu endereço e fique por dentro de todas as novidades e informações exclusivas!</p> 
            </div>
        </div>
    )
}