import { NavLink, Link } from "react-router-dom"
import { useState } from "react"
import { Menu } from "./Menu"

// iconos
import { IoCloseOutline } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";

// trancision
import { motion } from "framer-motion";


export function Encabezado() {
    const [menu, setMenu] = useState(false)

    return(<>
        <header >
            <div className="px-10 py-4 relative h-20">
                <div className="flex flex-row justify-between items-center">
                    <Link to={`/inicio`}className="no-underline text-black"><h1 className="text-2xl font-textos no-underline text-black">Hazbin<span className="no-underline font-titulos text-[28px]">Hotel</span></h1></Link>
                    <div className="flex flex-row justify-end items-center gap-3">
                        <nav className="hidden md:flex flex-row gap-16 items-center justify-center ">
                            <ul className="flex flex-row gap-16 items-center justify-end md:justify-center font-textos text-lg">
                                <li className="hidden lg:inline-block">
                                    <NavLink to={`/inicio`} className={({isActive}) => (isActive ? "font-bold border-b-2 border-blue-200 p-2 no-underline text-black" : "no-underline text-black")} >Inicio</NavLink>
                                </li>
                                <li className="hidden lg:inline-block">
                                    <NavLink to={`/cerraar`} className={({isActive}) => (isActive ? "font-bold border-b-2 border-blue-200 p-2 no-underline text-black" : "no-underline text-black")}>Cerrar Sesión</NavLink>
                                </li>
                                <li className="hidden md:inline-block">
                                    <NavLink to={`/reservar`} className={({isActive}) => (isActive ? "font-bold bg-blue-200 py-[11px] px-5 no-underline text-black" : "bg-black text-white py-[11px] px-5 hover:bg-blue-200 no-underline hover:text-black")}>Reservar</NavLink>
                                </li>
                            </ul>
                        </nav>

                        {menu ?
                            <>
                            <motion.button onClick={() => {setMenu(false)}}  initial={{ opacity: 0, scale:0.9 }} animate={{ opacity: 1, scale:1}} transition={{ duration: 0.3}} className="flex lg:hidden "><IoCloseOutline className="text-5xl"/></motion.button>
                            </>
                            :   
                            <motion.button onClick={() => {setMenu(true)}} initial={{ opacity: 0, scale:0.9 }} animate={{ opacity: 1, scale:1}} transition={{ duration: 0.3}} className="flex lg:hidden items-center" ><IoMenuOutline className="text-5xl"/></motion.button>
                        }
                    </div>
                </div>
                <Menu menu={menu} setMenu={setMenu} />
            </div>
            <div className="border-y border-black">
                <nav className="py-3 px-5 md:px-10">
                    <ul style={{}}  className="flex w-full md:justify-around overflow-x-scroll md:overflow-x-hidden overflow-y-hidden gap-20 text-lg font-textos h-10 md:h-auto">
                        <li className="flex-none w-30 scroll-snap-align-center no-underline text-black">
                            <NavLink to={`/contacto`} className={({isActive}) => (isActive ? "font-bold border-b-2 border-blue-200 no-underline text-black" : "no-underline text-black")} >Contacto</NavLink>
                        </li>
                        <li className="flex-none w-30 scroll-snap-align-center">
                            <NavLink to={`/ofertas`} className={({isActive}) => (isActive ? "font-bold border-b-2 border-blue-200 no-underline text-black" : "no-underline text-black")} >Ofertas</NavLink>
                        </li>
                        <li className="flex-none w-30 scroll-snap-align-center">
                            <NavLink to={`/habitaciones`} className={({isActive}) => (isActive ? "font-bold border-b-2 border-blue-200 no-underline text-black" : "no-underline text-black")}>Habitaciones</NavLink>
                        </li>
                        <li className="flex-none w-30 scroll-snap-align-center">
                            <NavLink to={`/blog`} className={({isActive}) => (isActive ? "font-bold border-b-2 border-blue-200 no-underline text-black" : "no-underline text-black")}>Blog</NavLink>
                        </li>
                        <li className="flex-none w-30 scroll-snap-align-center">
                            <NavLink to={`/pagos`} className={({isActive}) => (isActive ? "font-bold border-b-2 border-blue-200 no-underline text-black" : "no-underline text-black")}>Pagos</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </>)
}