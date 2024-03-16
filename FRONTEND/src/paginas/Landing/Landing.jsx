import { Link } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { Mostrar } from '../../App'

import { Parallax } from '../../componentes/Parallax/Parallax';
import { Servicios } from '../../componentes/Landing/Servicios';
import { Opiniones } from '../../componentes/Landing/Opiniones';
import ModoOscuro from '../../componentes/Modo Oscuro/ModoOscuro';



export function Landing() {
    //no mostrar header ni boton reservar
    const { setHeaderMostrar, setBotonRMostrar, setClimaMostrar} = useContext(Mostrar);
    useEffect(() => {
        // Al entrar en la ruta
        setHeaderMostrar(false);
        setBotonRMostrar(false)
        setClimaMostrar(false)
    
        // Al salir de la ruta
        return () => {
            setHeaderMostrar(true);
            setClimaMostrar(true)
            setBotonRMostrar(true);
        };
    }, []);

    return(<>
        <ModoOscuro>
            {(isDarkMode) => (
                <section className={`${isDarkMode ? ' bg-dark-greenOscuro' : 'bg-blue-300'}`}>
                    <Parallax></Parallax>
                    <div className='py-11 mb-40'>
                        <article className='flex flex-col items-center gap-40'>
                            <h2 className={` text-3xl font-textos text-center mt-20 md:text-4xl mx-5 ${isDarkMode ? ' text-white' : 'text-black'}`}>Bienvenido a Hazbin<span className='font-titulos text-4xl'>Hotel</span></h2>
                            <div className='bg-landingFondo1 bg-cover bg-fixed shadow-2xl'>
                                <section className={`flex flex-col items-center justify-center text-center gap-16 py-16 ${isDarkMode ? 'bg-gray-400' : 'bg-gray-300'}`} >
                                    <h3 className='text-white font-bold text-xl font-textos text-justify w-4/5'>Lo Mejor para Disfrutar de la Isla de Margarita</h3>
                                    <p className='text-white font-textos text-lg text-justify w-4/5'>En HazbinHotel, creemos que cada momento de tus vacaciones debe ser especial. Desde el momento en que pones un pie en nuestra propiedad, te sumergirás en un mundo de elegancia, comodidad y belleza natural.</p>
                                    <p className='text-white font-textos text-lg text-justify w-4/5'>Nos ubicamos en: C. Antonio Díaz, Pampatar 6316, Nueva Esparta, Venezuela</p>
                                    <Link to={`inicio`} className='w-4/5 '>
                                        <button className='w-full h-16 border-white border-2 no-underline text-white text-xl font-textos md:w-1/2 hover:bg-black'>Ingresa Ahora</button>
                                    </Link>
                                </section>
                            </div>
                            <section className='flex flex-col items-center gap-20'>
                                <h3 className={`font-bold text-2xl font-textos text-justify md:text-3xl ${isDarkMode ? ' text-white' : 'text-black'}`}>Te Ofrecemos...</h3>
            
                                <Servicios/>
                            </section>
                        </article>
                    </div>
                    <div className='bg-landingFondo1 bg-cover bg-fixed shadow-2xl w-full'>
                        <section className={`flex flex-col items-center justify-center gap-16 py-20 ${isDarkMode ? ' bg-gray-400' : 'bg-gray-300'}`}>
                            <h3 className='text-white font-bold text-2xl font-textos text-center w-4/5 sm:text-3xl'>Usuarios opinan que...</h3>
                            <section className='grid grid-cols-1 px-20 md:px-10 md:grid-cols-3 gap-10 font-textos '>
                                <Opiniones/>
                            </section>
                            <h3 className='text-white font-bold text-2xl font-textos text-center w-4/5 sm:text-3xl'>¿Qué estás esperando?</h3>
                            <Link to={`inicio`} className='w-4/5 flex flex-col items-center no-underline hover:text-black'>
                                <button className='w-full h-16 border-white border-2 no-underline text-white text-xl font-textos md:w-1/2 hover:bg-black'>Ingresa Ahora</button>
                            </Link>
                        </section>
                    </div>
                </section>
            )}
        </ModoOscuro>
    
    </>)
}