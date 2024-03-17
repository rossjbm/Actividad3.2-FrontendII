import { MdPhoneInTalk } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { PiTiktokLogoLight } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";

import ModoOscuro from "../../componentes/Modo Oscuro/ModoOscuro";

export function Contacto(){
    
    return(<>
        <ModoOscuro>
            {(isDarkMode) => (
                <section className="flex flex-col">
                    <div className="static h-56 bg-bgFondo1 bg-cover bg-fixed w-full ">
                        <div className="flex justify-center items-center w-full h-56 bg-gray-400 p-5">
                            <h2 className="text-white text-3xl font-textos text-center">Contacto</h2>
                        </div>
                    </div>
                    <div className={`flex flex-col gap-20 justify-center items-center w-11/12 md:w-1/2 mx-auto my-20 font-textos ${isDarkMode ? `text-white` : `text-black`}`}>
                        <h3 className="text-3xl font-bold text-center">Puedes comunicarte con nosotros...</h3>
                        <div className={`w-full flex flex-col gap-3 p-4 ${isDarkMode ? `bg-dark-greenMedio` : `bg-gradient-to-t from-blue-200 to-green-100`}`} >
                            <h4 className="text-2xl" >Físicamente en:</h4>
                            <p className="flex items-center gap-2 text-xl"><IoLocationSharp className="text-3xl" />C. Antonio Díaz, Pampatar 6316, Nueva Esparta, Venezuela</p>
                        </div>
                        <div className={`w-full flex flex-col gap-3 p-4 ${isDarkMode ? `bg-dark-greenMedio` : `bg-gradient-to-t from-blue-200 to-green-100`}`} >
                            <h4 className="text-2xl" >Llamadas al:</h4>
                            <p className="flex items-center gap-2 text-xl"><MdPhoneInTalk className="text-3xl" />+58 295-2345678</p>
                            <p className="flex items-center gap-2 text-xl"><MdPhoneInTalk className="text-3xl" />+58 412-4657234</p>
                        </div>
                        <div className={`w-full flex flex-col gap-3 p-4 ${isDarkMode ? `bg-dark-greenMedio` : `bg-gradient-to-t from-blue-200 to-green-100`}`} >
                            <h4 className="text-2xl" >Correo Electrónico:</h4>
                            <p className="flex items-center gap-2 text-xl"><MdEmail className="text-3xl" />hazbinhotelvzla@gmail.com</p>
                            <p className="flex items-center gap-2 text-xl"><MdEmail className="text-3xl" />hazbinhoteles reservaciones@gmail.com</p>
                        </div>
                        <div className={`w-full flex flex-col gap-3 p-4 ${isDarkMode ? `bg-dark-greenMedio` : `bg-gradient-to-t from-blue-200 to-green-100`}`} >
                            <h4 className="text-2xl" >WhatsApp y Telegram al:</h4>
                            <p className="flex items-center gap-2 text-xl"><MdPhoneInTalk className="text-3xl" />+58 412-4657234</p>
                        </div>
                        <div className={`w-full flex flex-col gap-3 p-4 ${isDarkMode ? `bg-dark-greenMedio` : `bg-gradient-to-t from-blue-200 to-green-100`}`} >
                            <h4 className="text-2xl" >Redes Sociales:</h4>
                            <p className="flex items-center gap-2 text-xl"><CiInstagram className="text-3xl" />Instagram / @hazbinhotel_vzla</p>
                            <p className="flex items-center gap-2 text-xl"><CiFacebook className="text-3xl" />Facebook / HazbinHotel-Nueva Esparta</p>
                            <p className="flex items-center gap-2 text-xl"><PiTiktokLogoLight className="text-3xl" />Tiktok / @hazbinhotelVzla</p>
                        </div>
                        <div className={`w-full flex flex-col gap-3 p-4 ${isDarkMode ? `bg-dark-greenMedio` : `bg-gradient-to-t from-blue-200 to-green-100`}`} >
                            <h4 className="text-2xl" >Directamente con Nuestros Socios:</h4>
                            <a href="https://github.com/rossjbm" className="flex items-center gap-2 text-xl"><FaGithub className="text-3xl" />GitHub / @rossjbm</a>
                            <a href="https://github.com/joseeee11" className="flex items-center gap-2 text-xl"><FaGithub className="text-3xl" />GitHub / @joseeee11</a>
                            <a href="https://github.com/JMMP33" className="flex items-center gap-2 text-xl"><FaGithub className="text-3xl" />GitHub / @JMMP33</a>
                            <a href="https://github.com/Javier1432" className="flex items-center gap-2 text-xl"><FaGithub className="text-3xl" />GitHub / @Javier1432</a>
                        </div>
                    </div>
                </section>
            )}
        </ModoOscuro>
    </>)
}