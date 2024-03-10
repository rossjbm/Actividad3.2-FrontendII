import { useState } from "react";
import { Link } from "react-router-dom";

import { ServicioCarrusel } from "../../componentes/Inicio/ServicioCarrusel";
import { Horarios } from "../../componentes/Inicio/Horarios";

import ofertasData from "../../data/Ofertas.json"

export function Inicio() {
    const [oferta, setOferta] = useState(ofertasData[1]);

    return (<>
        <article className="flex flex-col gap-20">
            <div className="static h-56 bg-bgFondo1 bg-cover bg-fixed w-full ">
                <div className="flex justify-center items-center w-full h-56 bg-gray-400 p-5">
                    <h2 className="text-white text-3xl font-textos text-center">HazbinHotel: Un Paraíso a tu Disposición</h2>
                </div>
            </div>

            <div className="font-textos text-lg flex flex-col p-10 gap-6 text-justify md:px-56 md:flex-row md:gap-14">
                <p className="md:bg-gradient-to-t from-blue-200 to-green-100 md:p-5">Ubicado en la paradisíaca Isla de Margarita, el HazbinHotel es un refugio de elegancia, tranquilidad, seguridad y diversión.</p>

                <p className="md:bg-gradient-to-t from-blue-200 to-green-100 md:p-5">Este es más que un lugar para quedarse, es una experiencia. Reserva tu estancia hoy y descubre el paraíso en la Isla de Margarita.</p>
            </div>

            <div className="static h-36 bg-bgFondo1 bg-cover bg-fixed w-full ">
                <div className="flex justify-center items-center w-full h-36 bg-gray-400 p-5">
                    <h2 className="text-white text-3xl font-textos text-center">Horarios</h2>
                </div>
            </div>

            <div className="font-textos grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-11 p-10 mb-24">
                <Horarios/>
            </div>

            <div className="static h-36 bg-bgFondo2 bg-cover bg-fixed w-full ">
                <div className="flex justify-center items-center w-full h-36 bg-gray-400 p-5">
                    <h2 className="text-white text-3xl font-textos text-center">Servicios</h2>
                </div>
            </div>

            <div className="mb-24">
                <ServicioCarrusel/>
            </div>

            <div className="static h-36 bg-bgFondo1 bg-cover bg-fixed w-full ">
                <div className="flex justify-center items-center w-full h-36 bg-gray-400 p-5">
                    <h2 className="text-white text-3xl font-textos text-center">Oferta Especial</h2>
                </div>
            </div>

            <div className="h-[400px] md:h-[500px] relative ">
                <img src={oferta.imagen} alt="" className="w-full h-full object-cover" />
                <div className='flex md:justify-start md:items-center h-full justify-end items-end absolute z-10 top-0 md:ml-6'>
                    <div className='bg-white md:flex flex-col md:w-3/5  justify-center p-4 gap-5'>
                        <h5 className="font-textos text-xl font-semibold">{oferta.nombre}</h5>
                        <p className="p-2 bg-blue-200 font-textos">Disponible hasta: {oferta.limite}</p>
                        <p className="font-textos text-base">{oferta.descripcion}</p>
                    </div>
                </div>
            </div>

            <div className=" flex flex-col items-center  mb-40 ">
                <Link to={`/ofertas`} className='no-underline hover:text-black  md:w-1/2 w-4/5'>
                    <button className='w-full h-16 border-black border-2 no-underline text-xl font-textos hover:bg-green-100 hover:font-bold'>Ver Más Ofertas</button>
                </Link>
            </div>

        </article>
    </>)
}