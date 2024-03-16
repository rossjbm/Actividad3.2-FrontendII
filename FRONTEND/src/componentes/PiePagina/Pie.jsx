import LogoClaro from '../../assets/Iconos/icono-mc.png'
import LogoOscuro from '../../assets/Iconos/icono-mo.png'

// iconos
import { MdPhoneInTalk } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import ModoOscuro from '../Modo Oscuro/ModoOscuro';


export function Pie() {

    return(<>
        <ModoOscuro>
            {(isDarkMode) => (
                <footer className={`flex flex-col gap-7 items-center pb-28 pt-10 py-5 md:pb-10 font-textos lg:grid lg:grid-cols-2 ${isDarkMode ? ' bg-gradient-to-tr from-dark-blueOscuro to-dark-greenMedio text-white' : 'bg-gradient-to-tr from-blue-200 to-green-100 text-black'}`}>
                    <h4 className="flex md:hidden text-2xl">Hazbin<span className="font-titulos text-[25px]">Hotel</span></h4>
                    <div className="hidden md:flex flex-col justify-center items-center">
                        <img src={isDarkMode ? LogoOscuro : LogoClaro} alt="Logo de Hazbin Hotel" className="w-36 lg:w-48 xl:w-64"/>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-7 w-full">
                        <p className="font-semibold text-lg">Contacta Nuestros Servicios</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex flex-col justify-start items-center gap-5">
                                <p className="text-lg">Principal</p>
                                <div className="">
                                    <p className="flex items-center gap-2 text-sm"><MdPhoneInTalk />+58 295-2345678</p>
                                    <p className="flex items-center gap-2 text-sm"><MdPhoneInTalk />+58 412-4657234</p>
                                    <p className="flex items-center gap-2 text-sm"><MdEmail />hazbinhotelvzla@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-start items-center gap-5">
                                <p className="text-lg">Redes Sociales</p>
                                <div className="flex gap-6">
                                    <a href="#" className={`no-underline p-2 ${isDarkMode ? ' text-white bg-dark-blueClaro' : 'bg-green-100 active:bg-blue-300  text-black'}`}><CiInstagram className="text-4xl"/></a>
                                    <a href="" className={`no-underline p-2 ${isDarkMode ? ' text-white bg-dark-blueClaro' : 'bg-green-100 active:bg-blue-300  text-black'}`}><FaGithub className="text-4xl"/></a>
                                    <a href="#" className={`no-underline p-2 ${isDarkMode ? ' text-white bg-dark-blueClaro' : 'bg-green-100 active:bg-blue-300  text-black'}`}><CiFacebook className="text-4xl"/></a>
                                </div>
                            </div>
                        </div>
                        <p className="text-xs">© 2024 HazbinHotel. Todos los derechos reservados.</p>
                    </div>
                </footer>
            )}
        </ModoOscuro>
    </>)
}