
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ModoOscuro from '../../componentes/Globales/Modo Oscuro/ModoOscuro';
import { ServicioCarrusel } from '../../componentes/Inicio/ServicioCarrusel';
import { Horarios } from '../../componentes/Inicio/Horarios';
import ofertasData from '../../data/Ofertas.json';
import Loader from '../../componentes/Globales/Loader/Loader';

export function Inicio() {
  const [oferta, setOferta] = useState(ofertasData[1]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una carga de datos
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simula una carga de 1 segundos
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
    <ModoOscuro>
      {(isDarkMode) => (
          <article className={`flex flex-col gap-20 ${isDarkMode ? 'dark:text-white dark:bg-dark-blueClaro' : 'bg-white text-black'}`}>
            <div className={`static h-56 bg-bgFondo1 bg-cover bg-fixed w-full`}>
              <div className="flex justify-center items-center w-full h-56 bg-gray-400 p-5">
                <h2 className={`text-white text-3xl font-textos text-center ${isDarkMode ? 'dark:text-gray-300' : ''}`}>
                  HazbinHotel: Un Paraíso a tu Disposición
                </h2>
              </div>
            </div>

            <div className={`font-textos text-lg flex flex-col p-10 gap-6 text-justify lg:px-56 md:flex-row md:gap-14 ${isDarkMode ? 'dark:text-white' : 'text-black'}`}>
              <p className={`md:p-5 ${isDarkMode ? 'dark:text-white md:bg-dark-greenMedio' : ' md:bg-gradient-to-t from-blue-200 to-green-100 text-black'}`} >
                Ubicado en la paradisíaca Isla de Margarita, el HazbinHotel es un refugio de elegancia, tranquilidad, seguridad y diversión.
              </p>
              <p className={`md:p-5 ${isDarkMode ? 'dark:text-white md:bg-dark-greenMedio' : ' md:bg-gradient-to-t from-blue-200 to-green-100 text-black'}`}>
                Este es más que un lugar para quedarse, es una experiencia. Reserva tu estancia hoy y descubre el paraíso en la Isla de Margarita.
              </p>
            </div>

            <div className={`static h-36 bg-bgFondo1 bg-cover bg-fixed w-full`}>
              <div className="flex justify-center items-center w-full h-36 bg-gray-400 p-5">
                <h2 className={`text-white text-3xl font-textos text-center`}>Horarios</h2>
              </div>
            </div>

            <div className={`font-textos grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-11 p-10 mb-24 ${isDarkMode ? 'dark:text-white' : 'text-black'}`}>
              <Horarios/>
            </div>

            <div className={`static h-36 bg-bgFondo2 bg-cover bg-fixed w-full ${isDarkMode ? 'dark:bg-gray-900' : 'bg-gray-400'}`}>
              <div className="flex justify-center items-center w-full h-36 bg-gray-400 p-5">
                <h2 className={`text-white text-3xl font-textos text-center ${isDarkMode ? 'dark:text-gray-300' : ''}`}>Servicios</h2>
              </div>
            </div>

            <div className={`mb-24`}>
              <ServicioCarrusel />
            </div>

            <div className={`static h-36 bg-bgFondo1 bg-cover bg-fixed w-full ${isDarkMode ? 'dark:bg-gray-900' : 'bg-gray-400'}`}>
              <div className="flex justify-center items-center w-full h-36 bg-gray-400 p-5">
                <h2 className={`text-white text-3xl font-textos text-center`}>Oferta Especial</h2>
              </div>
            </div>

            <div className="h-[400px] md:h-[500px] relative ">
              <img src={oferta.imagen} alt="" className="w-full h-full object-cover" />
              <div className='flex md:justify-start md:items-center h-full justify-end items-end absolute z-10 top-0 md:ml-6'>
                <div className={`md:flex flex-col md:w-3/5  justify-center p-4 gap-5 ${isDarkMode ? 'dark:text-white bg-dark-greenMedio' : 'bg-white text-black'}`}>
                  <h5 className="font-textos text-xl font-semibold">{oferta.nombre}</h5>
                  <p className={`font-textos p-2 ${isDarkMode ? 'dark:text-white bg-dark-blueClaro' : 'bg-blue-200 text-black'}`}>Disponible hasta: {oferta.limite}</p>
                  <p className="font-textos text-base">{oferta.descripcion}</p>
                </div>
              </div>
            </div>

            <div className={`flex flex-col items-center mb-40 ${isDarkMode ? 'dark:text-white' : ''}`}>
              <Link to={`/ofertas`} className={`no-underline  md:w-1/2 w-4/5 ${isDarkMode ? 'dark:text-white ' : 'hover:text-black'}`}>
                <button className={`w-full h-16  border-2 no-underline text-xl font-textos hover:bg-green-100 hover:font-bold ${isDarkMode ? 'border-white bg-dark-greenMedio dark:hover:bg-dark-greenClaro hover:text-dark-blueOscuro' : 'border-black'}`}>
                  Ver Más Ofertas
                </button>
              </Link>
            </div>
          </article>
        
      )}
    </ModoOscuro>
    )}
    </>     
    ); 
}
