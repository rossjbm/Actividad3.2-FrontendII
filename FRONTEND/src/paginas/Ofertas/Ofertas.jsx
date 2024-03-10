import React, { useState } from 'react';
import ofertasData from "../../data/Ofertas.json";

export function Ofertas() {
  const [ofertas, setOfertas] = useState(ofertasData);

  return (
    <>
      <div className="static h-56 bg-bgFondo1 bg-cover bg-fixed w-full">
        <div className="flex justify-center items-center w-full h-56 bg-gray-400 p-5">
          <h2 className="text-white text-3xl font-textos text-center">Ofertas</h2>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-14 py-20 xl:grid-cols-2 xl:px-20'>
        {
          ofertas.map(oferta => (
            <section key={oferta.id} className='bg-gray-300 md:grid md:grid-cols-2'>
              <div>
                <img src={oferta.imagen} alt="Oferta" className='h-72 xl:h-full object-cover w-full'/>
              </div>
              <div className='flex flex-col gap-4 p-4 justify-around items-center text-white font-textos'>
                <h3 className='text-2xl text-center'>{oferta.nombre}</h3>
                <p className='text-xl bg-blue-200 p-2 text-black font-bold'>{oferta.limite}</p>
                <p className='text-center'>{oferta.descripcion}</p>
              </div>
            </section>
          ))
        }
      </div>
    </>
  );
}
