import React, { useState, useContext, useEffect } from 'react';

// Componentes
import { ListarOfertas } from '../../funciones/Fetch/Ofertas/ListarOfertas';
import { RenderOfertas } from '../../componentes/Ofertas/RenderOfertas';
import { AgregarOfertas } from '../../componentes/Ofertas/CRUD/AgregarOfertas';
import Loader from '../../componentes/Globales/Loader/Loader';
import { AlertaExito } from '../../componentes/Alertas/AlertaExito';
import { AlertaError } from '../../componentes/Alertas/AlertaError';
import { AlertaConfirmar } from '../../componentes/Alertas/AlertaConfirmar';


// Modo oscuro
import ModoOscuro from '../../componentes/Globales/Modo Oscuro/ModoOscuro';

// Contexto de la sesión activa
import { Sesion } from '../../App';
import { Alertas } from '../../App';

export const ActualizarDatos = React.createContext();

export function Ofertas() {
  const { sesionActiva } = useContext(Sesion);
  const [ofertas, setOfertas] = useState();
  const [cargando, setCargando] = useState(false);
  const [botonMostrar, setBotonMostrar] = useState(false); // Estado para mostrar el botón

  const [actualizar, setActualizar] = useState(false);
  const {alerta} = useContext(Alertas)


  useEffect(() => {
    async function fetchData() {
      setCargando(true);
      try {
        // console.log('Estamos listando ofertas');
        const documentos = await ListarOfertas();
        await new Promise(resolve => setTimeout(resolve, 2000));
        // console.log('Soy doc m',documentos.mensaje)
        // console.log('Soy doc h', documentos.habitaciones);
        setOfertas(documentos.habitaciones);

        if(documentos.mensaje === 'No hay habitaciones disponibles') {
          setOfertas(documentos.mensaje);
          // console.log('entramos')
        }
        setActualizar(false);
        setBotonMostrar(true); // Mostrar el botón después de cargar las ofertas
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [actualizar]);

  useEffect(() => {
    ofertas === undefined ? setCargando(true) : setCargando(false);
    console.log('Oferta es', Array.isArray(ofertas));
  }, [ofertas]);

  return (
    <>
      <ModoOscuro>
        {(isDarkMode) => (
          <>
            {/* Titulo de página */}
            <div className="static h-56 bg-bgFondo1 bg-cover bg-fixed w-full">
              <div className="flex justify-center items-center w-full h-56 bg-gray-400 p-5">
                <h2 className="text-white text-3xl font-textos text-center">Ofertas</h2>
              </div>
            </div>

            <>
              <ActualizarDatos.Provider value={{setActualizar}}>
                {/* Agregar ofertas */}
                {sesionActiva === 2 && botonMostrar && (
                  <AgregarOfertas />
                )}

                {/* Renderizado Ofertas */}
                {cargando || !ofertas ? (
                  <Loader />
                ) : (
                  <RenderOfertas ofertas={ofertas} />
                )}

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
            </>
            
          </>
        )}
      </ModoOscuro>
    </>
  );
}
