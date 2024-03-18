import {Link} from "react-router-dom"
import ModoOscuro from "../Globales/Modo Oscuro/ModoOscuro"

export default function BotonReservar() {
    return(<ModoOscuro>
        {(isDarkMode) => (
            <div className="flex md:hidden">
                <Link to={`/reservar`} className="no-underline">
                    <button className={`z-30 fixed bottom-0 w-full h-20  border-y-2 font-textos text-2xl font-semibold  tracking-widest hover:border-4 ${isDarkMode ? 'dark:text-white border-white hover:bg-dark-greenClaro bg-dark-blueClaro hover:text-dark-blueOscuro' : 'text-black bg-white hover:bg-blue-200 border-black'}`}>Reservar</button>
                </Link>
            </div>
        )}
    </ModoOscuro>)
}