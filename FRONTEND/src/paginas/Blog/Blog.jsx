import React, { useState, useEffect } from 'react';
import { Accordion } from 'react-bootstrap';
import ModoOscuro from '../../componentes/Globales/Modo Oscuro/ModoOscuro';
import data from '../../data/Blog.json';
import Loader from '../../componentes/Globales/Loader/Loader';

export function Blog() {
  const [articulos, setArticulos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una carga de datos
    setTimeout(() => {
      setArticulos(data);
      setLoading(false);
    }, 2000); // Simula una carga de 2 segundos
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ModoOscuro>
          {(isDarkMode) => (
            <section className="min-h-screen">
              <div className={`static h-56 bg-bgFondo1 bg-cover bg-fixed w-full mb-16`}>
                <div className="flex justify-center items-center w-full h-56 bg-gray-400 p-5">
                  <h2 className={`text-white text-3xl font-textos text-center ${isDarkMode ? 'dark:text-gray-300' : ''}`}>
                    Bienvenido al HazbinBlog
                  </h2>
                </div>
              </div>
              {articulos.map(articulo => (
                <article key={articulo.id} className={`w-full ${isDarkMode ? `text-white` : `text-black`}`} >
                  <div className="relative overflow-hidden flex min-h-60 md:min-h-96 h-auto w-full justify-center items-center" >
                    <img className="absolute w-full object-cover" src={articulo.imagen} alt="" />
                    <div className={`w-11/12 md:w-auto md:px-20 md:m-20 drop-shadow-md rounded-md p-3 ${isDarkMode ? `bg-dark-blueOscuro` : `bg-white `}`} >
                      <p className="md:text-4xl font-titulos text-center w-full text-gray-700">
                        {articulo.titulo}
                      </p>
                    </div>
                  </div>
                  <div className="p-10">
                    <Accordion data-bs-theme={isDarkMode ? "dark" : "light"} className={`md:mb-16 `}>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header className={` ${isDarkMode ? `bg-dark-blueOscuro` : `bg-white`}`}>
                          <p className={`text-justify md:text-2xl w-full p-3 ${isDarkMode ? `text-white` : `text-black`}`} >
                            {articulo.descripcion}
                          </p>
                        </Accordion.Header>
                        <Accordion.Body className={`font-textos ${isDarkMode ? `bg-dark-blueOscuro` : `text-black`}`} >
                          {articulo.leer_mas.map(leer_mas => (
                            <article key={leer_mas.id}>
                              <p className="font-titulos md:text-3xl md:py-14 text-2xl py-2">{leer_mas.titulo}</p>
                              <p className="md:pb-14 md:text-2xl pb-3"> {leer_mas.descripcion}</p>
                            </article>
                          ))}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </article>
              ))}
            </section>
          )}
        </ModoOscuro>
      )}
    </>
  );
}
