import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import Servicio1 from '../../assets/Servicios/Servicio1.jpeg'
import Servicio2 from '../../assets/Servicios/Servicio2.jpg'
import Servicio3 from '../../assets/Servicios/Servicio3.jpg'
import Servicio4 from '../../assets/Servicios/Servicio4.jpg'
import Servicio5 from '../../assets/Servicios/Servicio5.jpg'
import Servicio6 from '../../assets/Servicios/Servicio6.jpg'
import Servicio7 from '../../assets/Servicios/Servicio7.jpeg'

import ModoOscuro from '../Modo Oscuro/ModoOscuro'

export function ServicioCarrusel() {
  return (<ModoOscuro>
      {(isDarkMode) => (
        <Carousel data-bs-theme={isDarkMode ? "dark" : "light"}>
          <Carousel.Item>
            <img
              className="d-block w-full h-[500px] object-cover"
              src={Servicio1}
              alt="Habitaciones"
            />
            <Carousel.Caption className='flex md:justify-start md:items-center h-full justify-end items-end'>
              <div className={`md:flex flex-col md:w-3/5 justify-center p-4 gap-4 ${isDarkMode ? 'dark:text-white bg-dark-greenMedio' : 'bg-white  text-black'}`} >
                <h5 className="font-textos text-xl font-semibold">Habitaciones de Lujo</h5>
                <p className="font-textos text-base">Las habitaciones del HazbinHotel están diseñadas para proporcionar el máximo confort y lujo. Cada habitación está equipada con un baño privado con ducha de lluvia, una pantalla plana y un minibar bien surtido.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
    
          <Carousel.Item>
            <img
              className="d-block w-full h-[500px] object-cover"
              src={Servicio2}
              alt="Restaurante Gourmet"
            />
            <Carousel.Caption className='flex md:justify-start md:items-center h-full justify-end items-end'>
              <div className={`md:flex flex-col md:w-3/5 justify-center p-4 gap-4 ${isDarkMode ? 'dark:text-white bg-dark-greenMedio' : 'bg-white  text-black'}`}>
                <h5 className="font-textos text-xl font-semibold">Restaurante Gourmet de Lujo</h5>
                <p className="font-textos text-base">El hotel cuenta con un restaurante de alta cocina que sirve una variedad de platos locales e internacionales. Los chefs utilizan ingredientes frescos y de alta calidad para crear tus platos deliciosos.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
    
          <Carousel.Item>
            <img
              className="d-block w-full h-[500px] object-cover"
              src={Servicio3}
              alt="Spa de Relajación"
            />
            <Carousel.Caption className='flex md:justify-start md:items-center h-full justify-end items-end'>
              <div className={`md:flex flex-col md:w-3/5 justify-center p-4 gap-4 ${isDarkMode ? 'dark:text-white bg-dark-greenMedio' : 'bg-white  text-black'}`}>
                <h5 className="font-textos text-xl font-semibold">Spa de Relajación</h5>
                <p className="font-textos text-base">El spa del hotel ofrece una variedad de tratamientos, incluyendo masajes, tratamientos faciales, envolturas corporales y más. Es el lugar perfecto para relajarse y rejuvenecer después de un día de exploración.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
    
          <Carousel.Item>
            <img
              className="d-block w-full h-[500px] object-cover"
              src={Servicio4}
              alt="Gimnasio"
            />
            <Carousel.Caption className='flex md:justify-start md:items-center h-full justify-end items-end'>
              <div className={`md:flex flex-col md:w-3/5 justify-center p-4 gap-4 ${isDarkMode ? 'dark:text-white bg-dark-greenMedio' : 'bg-white  text-black'}`}>
                <h5 className="font-textos text-xl font-semibold">Gimnasio</h5>
                <p className="font-textos text-base">El hotel cuenta con un gimnasio bien equipado para aquellos que desean mantener su rutina de ejercicios durante su estancia. Tiene una variedad de equipos de cardio y de fuerza, así como clases de fitness.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <img
              className="d-block w-full h-[500px] object-cover"
              src={Servicio5}
              alt="Piscina al Aire Libre"
            />
            <Carousel.Caption className='flex md:justify-start md:items-center h-full justify-end items-end'>
              <div className={`md:flex flex-col md:w-3/5 justify-center p-4 gap-4 ${isDarkMode ? 'dark:text-white bg-dark-greenMedio' : 'bg-white  text-black'}`}>
                <h5 className="font-textos text-xl font-semibold">Piscina al Aire Libre</h5>
                <p className="font-textos text-base">El hotel cuenta con una hermosa piscina al aire libre donde los huéspedes pueden relajarse y disfrutar del sol. La piscina está rodeada de tumbonas y sombrillas para la comodidad de los huéspedes.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
    
          <Carousel.Item>
            <img
              className="d-block w-full h-[500px] object-cover"
              src={Servicio6}
              alt="Seguridad las 24 horas"
            />
            <Carousel.Caption className='flex md:justify-start md:items-center h-full justify-end items-end'>
              <div className={`md:flex flex-col md:w-3/5 justify-center p-4 gap-4 ${isDarkMode ? 'dark:text-white bg-dark-greenMedio' : 'bg-white  text-black'}`}>
                <h5 className="font-textos text-xl font-semibold">Seguridad las 24 horas</h5>
                <p className="font-textos text-base">Para garantizar la seguridad y la tranquilidad de los huéspedes, el hotel cuenta con seguridad las 24 horas. El personal de seguridad está altamente capacitado y siempre está disponible para ayudar a los huéspedes.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-full h-[500px] object-cover"
              src={Servicio7}
              alt="Actividades Recreativas"
            />
            <Carousel.Caption className='flex md:justify-start md:items-center h-full justify-end items-end'>
              <div className={`md:flex flex-col md:w-3/5 justify-center p-4 gap-4 ${isDarkMode ? 'dark:text-white bg-dark-greenMedio' : 'bg-white  text-black'}`}>
                <h5 className="font-textos text-xl font-semibold">Actividades Recreativas</h5>
                <p className="font-textos text-base">El hotel ofrece una variedad de actividades recreativas para los huéspedes, incluyendo deportes acuáticos, senderismo, ciclismo y más. Están diseñadas para proporcionar diversión y entretenimiento a los huéspedes durante su estancia.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
    
        </Carousel> 
      )} 
    </ModoOscuro>);
}
