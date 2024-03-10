import React, { useState } from 'react';
import data from "../../data/Habitaciones.json"


export function Habitaciones() {
  const [habitaciones, setHabitaciones] = useState(data)
  return(<>
    <div className="static h-56 bg-bgFondo1 bg-cover bg-fixed w-full">
        <div className="flex justify-center items-center w-full h-56 bg-gray-400 p-5">
            <h2 className="text-white text-3xl font-textos text-center">Habitaciones</h2>
        </div>
    </div>
    <div className='grid grid-cols-1 gap-14 py-20 xl:grid-cols-2 xl:px-20'>
      {
        habitaciones.map(habitacion => (
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
        ))
      }
    </div>
  </>)
}