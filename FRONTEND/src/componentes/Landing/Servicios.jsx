import ImgUbicacion from '../../assets/Landing/ubicacion2.jpg';
import ImgSotisficado from '../../assets/Landing/sotisficado2.jpeg';
import ImgGastronomia from '../../assets/Landing/gastronomia2.jpg';
import ImgActividades from '../../assets/Landing/actividades2.jpg';
import ModoOscuro from '../Modo Oscuro/ModoOscuro';

export function Servicios() {
    return(<>
        <ModoOscuro>
            {(isDarkMode) => (
                <div className='grid grid-cols-1 gap-32 xl:grid-cols-2 xl:gap-20 xl:m-10'>
                    <section className={`flex flex-col sm:flex-row gap-2  shadow-2xl ${isDarkMode ? ' bg-dark-blueClaro' : 'bg-gray-300'}`} >
                        <div className='h-80 xl:h-full sm:w-1/2 shadow-2xl'>
                            <img src={ImgUbicacion} alt="Ubicación de HazbinHotel" className='w-full h-full object-cover'/>
                        </div>
                        <div className='sm:w-1/2 p-5 flex flex-col gap-6'>
                            <h4 className='text-2xl font-textos font-semibold text-white'> Ubicación Perfecta</h4>
                            <p className='text-lg font-textos text-justify text-white'>Situado en la pintoresca Isla de Margarita, nuestro hotel ofrece vistas panorámicas al mar Caribe y acceso directo a las playas de aguas cristalinas. ¡Despiértate con el sonido de las olas!</p>
                        </div> 
                    </section>
                    <section className={`flex flex-col sm:flex-row gap-2  shadow-2xl ${isDarkMode ? ' bg-dark-blueClaro' : 'bg-gray-300'}`}>
                        <div className='h-80 xl:h-full sm:w-1/2 shadow-2xl '>
                            <img src={ImgSotisficado} alt="Diseño Interior de HazbinHotel" className='w-full h-full object-cover'/>
                        </div>
                        <div className='sm:w-1/2 p-5 flex flex-col gap-6'>
                            <h4 className='text-2xl font-textos font-semibold text-white'>Diseño Sofisticado</h4>
                            <p className='text-lg font-textos text-justify text-white'>Cada rincón de HazbinHotel ha sido diseñado pensando en la comodidad y el lujo. Nuestras habitaciones y suites cuentan con mobiliario elegante y colores relajantes.</p>
                        </div>
                    </section>
                    <section className={`flex flex-col sm:flex-row gap-2  shadow-2xl  ${isDarkMode ? ' bg-dark-blueClaro' : 'bg-gray-300'}`}>
                        <div className='h-80 xl:h-full sm:w-1/2 shadow-2xl '>
                            <img src={ImgGastronomia} alt="Actividades en HazbinHotel" className='w-full h-full object-cover'/>
                        </div>
                        <div className='sm:w-1/2 p-5 flex flex-col gap-6'>
                            <h4 className='text-2xl font-textos font-semibold text-white'>Experiencias Gastronómicas</h4>
                            <p className='text-lg font-textos text-justify text-white'>Nuestro restaurante ofrece una fusión de sabores locales e internacionales. Disfruta de platos frescos y deliciosos mientras contemplas las vistas al mar.</p>
                        </div>
                    </section>
                    <section className={`flex flex-col sm:flex-row gap-2  shadow-2xl ${isDarkMode ? ' bg-dark-blueClaro' : 'bg-gray-300'}`}>
                        <div className='h-80 xl:h-full sm:w-1/2 shadow-2xl '>
                            <img src={ImgActividades} alt="Actividades en HazbinHotel" className='w-full h-full object-cover'/>
                        </div>
                        <div className='sm:w-1/2 p-5 flex flex-col gap-6'>
                            <h4 className='text-2xl font-textos font-semibold text-white'>Actividades para Todos</h4>
                            <p className='text-lg font-textos text-justify text-white'>Desde deportes acuáticos hasta excursiones por la isla, tenemos opciones para todos los gustos. Explora la belleza natural de Margarita o simplemente relájate en la playa.</p>
                        </div>
                    </section>
                </div>
            )}
        </ModoOscuro>
</>)
}