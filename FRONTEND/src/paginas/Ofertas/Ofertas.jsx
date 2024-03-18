import React, { useState, useContext, useEffect } from 'react';
import ofertasData from "../../data/Ofertas.json";

//componentes
import { ListarOfertas } from '../../funciones/Fetch/Ofertas/ListarOfertas';
import { RenderOfertas } from '../../componentes/Ofertas/RenderOfertas';
import { AgregarOfertas } from '../../componentes/Ofertas/CRUD/AgregarOfertas';
import Loader from '../../componentes/Globales/Loader/Loader';

//modo oscuro
import ModoOscuro from '../../componentes/Globales/Modo Oscuro/ModoOscuro';

//contexto de la sesion activa
import { Sesion } from '../../App';

export function Ofertas() {
  const {sesionActiva} = useContext(Sesion);
  const [ofertas, setOfertas] = useState();
  const [cargando, setCargando] = useState(false);

  useEffect( () => {
    async function fetchData() {
      setCargando(true)
      try {
        console.log('estamos listando ofertas')
        const documentos = await ListarOfertas()
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('soy doc', documentos.habitaciones)
        setOfertas(documentos.habitaciones)
      } catch(error) {
        console.log(error)
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    ofertas === undefined ? setCargando(true) : setCargando(false)
    console.log('oferta es', Array.isArray(ofertas))
  }, [ofertas]);



  return (
    <>
      <ModoOscuro>
        {(isDarkMode) => (
          <>
            {/* titulo de página */}
            <div className="static h-56 bg-bgFondo1 bg-cover bg-fixed w-full">
              <div className="flex justify-center items-center w-full h-56 bg-gray-400 p-5">
                <h2 className="text-white text-3xl font-textos text-center">Ofertas</h2>
              </div>
            </div>

            {/* agregar ofertas */}
            {sesionActiva === 2 ?
              <AgregarOfertas/>
              : null
            }

            {/* Renderizado Ofertas */}
            {cargando || !ofertas ? 
              <Loader/>
              : 
              // null
              <RenderOfertas ofertas={ofertas} /> 
            }
          </>
        )}
      </ModoOscuro>
    </>
  );
}
