import React, { useState, useEffect } from 'react';
import data from "../../data/Habitaciones.json";
import Loader from '../../componentes/Loader/Loader';
import FiltroModal from '../../componentes/Filtro/Filtro'; // Importa el componente FiltroModal

export function Habitaciones() {
  const [loading, setLoading] = useState(true);
  const [habitaciones, setHabitaciones] = useState([]);

  useEffect(() => {
    // Simulamos una carga de datos, puedes realizar una petición a una API aquí en su lugar
    const fetchData = async () => {
      // Simulamos un tiempo de carga de 2 segundos
      await new Promise(resolve => setTimeout(resolve, 2000));
      setHabitaciones(data); // Establecemos los datos una vez cargados
      setLoading(false); // Indicamos que la carga ha finalizado
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="static h-56 bg-bgFondo1 bg-cover bg-fixed w-full">
        <div className="flex justify-center items-center w-full h-56 bg-gray-400 p-5">
          <h2 className="text-white text-3xl font-textos text-center">Habitaciones</h2>     
        </div>
      </div>
      {loading ? ( // Si los datos están cargando, mostramos el Loader
        <Loader />
      ) : ( // Si los datos ya se han cargado, mostramos la lista de habitaciones
        <div className='grid grid-cols-1 gap-14 py-20 xl:grid-cols-2 xl:px-20'>
          {/* Agrega el componente FiltroModal */}
          <FiltroModal />
          {habitaciones.map(habitacion => (
            <section key={habitacion.id} className='bg-gray-300 md:grid md:grid-cols-2'>
              <div>
                <img src={habitacion.imagen} alt="Habitación" className='h-72 xl:h-full object-cover w-full'/>
              </div>
              <div className='flex flex-col gap-4 p-4 justify-around items-center text-white font-textos'>
                <h3 className='text-2xl text-center'>{habitacion.nombre}</h3>
                <p className='text-xl bg-blue-200 p-2 text-black font-bold'>{habitacion.precio}$</p>
                <p className='text-center'>{habitacion.descripcion}</p>
              </div>
            </section>
          ))}
        </div>
      )}
    </>
  );
}
