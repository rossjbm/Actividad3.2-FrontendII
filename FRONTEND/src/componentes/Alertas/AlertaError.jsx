
import { useContext } from "react"
import { Alertas } from "../../App"
import ModoOscuro from "../Globales/Modo Oscuro/ModoOscuro"

// iconos
import { IoCloseOutline } from "react-icons/io5"

export function AlertaError() {
    const {alerta, setAlerta, mensaje} = useContext(Alertas)

    return(<>
        <ModoOscuro>
            {(isDarkMode) => (
                <div className={alerta === 2 ? ` border-t-4  rounded-b  px-4 py-3 shadow-md fixed z-30 top-0 w-full ${isDarkMode ? `bg-[#3f0000] border-white text-white` : `bg-[#e84226] border-black text-black`}` : "hidden"} role="alert">
                    <div className="flex">
                    <div className="py-1"><svg className={`fill-current h-6 w-6 mr-4 ${isDarkMode ? `text-white` : `text-black`}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                    <div className='w-full flex flex-col gap-3'>
                        <p className="font-bold font-textos text-xl">Ocurrió un Error</p>
                        <p className="text-lg font-textos">{mensaje}</p>
                    </div>
                    <IoCloseOutline
                        className={`text-end cursor-pointer text-4xl ${isDarkMode ? `text-white` : `text-black`}`}
                        onClick={(e) => {setAlerta(false)}}
                    />
                    </div>
                </div> 
            )}
        </ModoOscuro>  
    </>)
}