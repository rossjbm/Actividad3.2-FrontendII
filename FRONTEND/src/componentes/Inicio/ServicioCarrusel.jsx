import React, { useState, useContext,useEffect } from 'react'

import { Sesion } from '../../App'
import { ListarServicio } from '../../funciones/Fetch/Servicios/ListarServicio'
import { AgregarServicios } from './Servicios/CRUD/AgregarServicios'
import { EditarServicios } from './Servicios/CRUD/EditarServicios'
import { EliminarServicios } from './Servicios/CRUD/EliminarServicios'
import Loader from '../Globales/Loader/Loader'
import ModoOscuro from '../Globales/Modo Oscuro/ModoOscuro'
import { Alertas } from '../../App'

//alertas
import { AlertaConfirmar } from '../Alertas/AlertaConfirmar'
import { AlertaExito } from '../Alertas/AlertaExito'
import { AlertaError } from '../Alertas/AlertaError'

//estilos
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'

//contextos
export const ActualizarDatos = React.createContext();

export function ServicioCarrusel() {
  const { sesionActiva } = useContext(Sesion);
  const [servicios, setServicios] = useState();
  const [cargando, setCargando] = useState(false);
  const [botonMostrar, setBotonMostrar] = useState(false); // Estado para mostrar el botón

  const [actualizar, setActualizar] = useState(false);
  const {alerta} = useContext(Alertas)  


  useEffect(() => {
    async function fetchData() {
      setCargando(true);
      try {
        // console.log('Estamos listando servicios');
        const documentos = await ListarServicio();
        // console.log(documentos)
        await new Promise(resolve => setTimeout(resolve, 2000));
        setServicios(documentos);
        setActualizar(false);
        setBotonMostrar(true); // Mostrar el botón después de cargar los servicios
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [actualizar]);

  useEffect(() => {
    servicios === undefined ? setCargando(true) : setCargando(false);
    // console.log('Servicio es', Array.isArray(servicios));
  }, [servicios]);

  return (<ModoOscuro>
      {(isDarkMode) => (
        <ActualizarDatos.Provider value={{setActualizar}}>
            {sesionActiva === 2 && botonMostrar && (
              <AgregarServicios />
            )}
            {
              servicios === 'No hay Servicios Registrados' ? 
              <div className={`py-20 flex justify-center items-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  <h2 className="text-xl">No hay Servicios Disponibles </h2>
              </div>
              : cargando || !servicios ? (
                <Loader />
              ) : (
                <Carousel data-bs-theme={isDarkMode ? "dark" : "light"}>
                  {
                    servicios.map(servicio => (
                      <Carousel.Item key={servicio._id} >
                        <img
                          className="d-block w-full h-[500px] object-cover"
                          src={`http://localhost:3000/images/${servicio.imagen}`}
                          alt="Habitaciones"
                        />
                        <Carousel.Caption className='flex md:justify-start md:items-center h-full justify-end items-end'>
                          <div className={`md:flex flex-col md:w-3/5 justify-center p-4 gap-4 ${isDarkMode ? 'dark:text-white bg-dark-greenMedio' : 'bg-white  text-black'}`} >
                            <h5 className="font-textos text-xl font-semibold">{servicio.titulo} </h5>
                            <p className="font-textos text-base">{servicio.descripcion}</p>

                            {sesionActiva===2 ?
                              <div className={`flex flex-row gap-3 justify-around items-center w-full`}>
                                  <EliminarServicios id={servicio._id}/>
                                  <EditarServicios id={servicio._id} />
                              </div> 
                            : null}

                          </div>
                        </Carousel.Caption>
                      </Carousel.Item>
                    ))
                  }
                </Carousel>
              )
            }
            {/* Mostrar Alertas */}
            {alerta === 1 ?
              <AlertaExito/>
              : alerta === 2 ?
              <AlertaError/>
              : alerta === 3 ?
              <AlertaConfirmar/>
              : null
            }
        </ActualizarDatos.Provider> 
      )} 
    </ModoOscuro>);
}
