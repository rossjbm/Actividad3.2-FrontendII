import { BsChatSquareQuote } from "react-icons/bs";

export function Opiniones() {
    return(<>
        <div className="text-white md:w-full h-auto flex flex-col items-center text-center gap-2">
            <BsChatSquareQuote className="text-4xl"/>
            <p>"El restaurante ofrece una variedad de platos deliciosos. Probé el ceviche fresco y el asado de pescado. Además, el personal fue atento y servicial..."</p>
        </div>
        <div className="text-white md:w-full h-auto flex flex-col items-center text-center gap-2">
            <BsChatSquareQuote className="text-4xl"/>
            <p>"El gimnasio estaba bien equipado, y también participé en algunas actividades recreativas organizadas por el hotel, nunca me aburrí ¡Una estancia inolvidable!"</p>
        </div>
        <div className="text-white md:w-full h-auto flex flex-col items-center text-center gap-2">
            <BsChatSquareQuote className="text-4xl"/>
            <p>"Desde el momento en que llegué, el personal de hotel fue amable y servicial. Está estratégicamente ubicado cerca de atracciones turísticas..."</p>
        </div>
        
    </>)
}