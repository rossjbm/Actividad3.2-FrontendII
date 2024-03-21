import React, { useState, useEffect } from "react";
import Loader from "../../componentes/Globales/Loader/Loader";
import FiltroModal from "../../componentes/Habitaciones/Filtro/Filtro"; // Importa el componente FiltroModal

import ModoOscuro from "../../componentes/Globales/Modo Oscuro/ModoOscuro";
import { ListarHabitaciones } from "../../funciones/Fetch/Habitaciones/habitaciones";
import { FiltrarHabitaciones } from "../../funciones/Fetch/Habitaciones/FiltrarHabitaciones";
import { NavLink } from "react-router-dom";

export const ContextFiltrar = React.createContext()

export function Habitaciones({setHabitacion}) {
  const [loading, setLoading] = useState(true);
  const [habitaciones, setHabitaciones] = useState();
  const [filtrado, setFiltrado] = useState(false);
  const [cantidad, setCantidad] = useState(false);


  useEffect(() => {
    async function listado() {
      const datos = await ListarHabitaciones();
      if (datos === undefined) {
        setLoading(false);
        return setHabitacion([])
      }
      setHabitaciones(datos); // Establecemos los datos una vez cargados
      setLoading(false); // Indicamos que la carga ha finalizado
    }

    listado()
  }, []);

  useEffect(() => {
    async function listado() {
      const datos = await FiltrarHabitaciones(cantidad);
      // console.log('SOY DATOOOS', datos)
      // console.log('SOY DATOOOS m', datos.mensaje)
      if (datos === undefined || datos.mensaje === 'No Existen Habitaciones para esa Cantidad de Personas') {
        setLoading(false);
        setFiltrado(false)
        return setHabitaciones(datos.mensaje)
      } else {
        // console.log('soy datos h', datos.habitacion);
        setHabitaciones(datos.habitacion);
      }
      setLoading(false);
      setFiltrado(false)
    }
    listado()
  }, [filtrado]);


  return (
    <>
      <ModoOscuro>
        {(isDarkMode) => (
          <>
            <div className="static h-56 bg-bgFondo1 bg-cover bg-fixed w-full">
              <div className="flex justify-center items-center w-full h-56 bg-gray-400 p-5">
                <h2 className="text-white text-3xl font-textos text-center">
                  Habitaciones
                </h2>
              </div>
            </div>
            {loading ? ( // Si los datos están cargando, mostramos el Loader
              <Loader />
            ) : (
              <>
                <ContextFiltrar.Provider value={{setFiltrado, setCantidad}} >
                  <div className={`filtro-container mt-20`}>
                    <FiltroModal />
                  </div>
                </ContextFiltrar.Provider>
                {Habitaciones === undefined || habitaciones === 'No Existen Habitaciones para esa Cantidad de Personas'?
                    <h3 className={`text-xl text-center font-semibold font-textos ${isDarkMode ? `text-white` : `text-black`}`}>No se encontraron Habitaciones</h3>
                :
                  <div className="grid grid-cols-1 gap-14 py-20 xl:grid-cols-2 xl:px-20">
                    {habitaciones.map((habitacion, i) => (
                      <section
                        key={i}
                        className={`md:grid md:grid-cols-2 ${
                          isDarkMode ? `bg-dark-greenMedio` : `bg-gray-300`
                        }`}
                      >
                        <NavLink to={`/habitaciones/detalles`}>
                          <img
                            src={habitacion.imagen_principal}
                            alt="Habitación"
                            className="h-72 xl:h-full object-cover w-full"
                            onClick={setHabitacion(habitacion)}
                          />
                        </NavLink>
                        <div className="flex flex-col gap-4 p-4 justify-around items-center text-white font-textos">
                          <h3 className="text-2xl text-center">
                            {habitacion.nombre}
                          </h3>
                          <p
                            className={`text-xl p-2 font-bold ${
                              isDarkMode
                                ? `text-white bg-dark-blueClaro`
                                : `bg-blue-200  text-black `
                            }`}
                          >
                            {" "}
                            {habitacion.tarifa}$
                          </p>
                          <p className="text-lg text-center">
                            <b>Hoy se encuentra: </b>
                            {habitacion.disponible}
                          </p>
                          <p className="text-lg text-center">
                            <b>Numero de Personas: </b>
                            {habitacion.personas}
                          </p>
                          <p className="text-center">{habitacion.descripcion}</p>
                          
                        </div>
                      </section>
                    ))}
                  </div>
                }
              </>
            )}
          </>
        )}
      </ModoOscuro>
    </>
  );
}
