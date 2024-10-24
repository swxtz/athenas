export function AboutUs(){
    return(
        <div >
            <div className="bg-red-500 flex flex-col w-1/3 p-5 text-justify text-sm gap-1 text-gray-200 rounded-sm">
                <p className="">Quer saber mais sobre nós? </p>
                <input className="bg-red-500 border hover:bprder-whiter text-sm p-2 text-gray-200  border-gray-300 w-8/12 hover:bg-red-400 h-7" 
                type="text" 
                name="" 
                placeholder="Digite seu email " id="" />
                <p>Digite seu endereço e fique por dentro de todas as novidades e informações exclusivas</p> 
            </div>
        </div>
    )
}