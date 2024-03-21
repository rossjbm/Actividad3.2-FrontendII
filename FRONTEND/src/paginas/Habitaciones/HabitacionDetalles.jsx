import React, { useState, useEffect } from "react";
import Loader from "../../componentes/Globales/Loader/Loader";

import ModoOscuro from "../../componentes/Globales/Modo Oscuro/ModoOscuro";
import { ListarReviews, agregarReview } from "../../funciones/Fetch/Habitaciones/Comentarios";
import Review from "../../componentes/Habitaciones/Review";
import { IoCloseOutline } from "react-icons/io5";

export function HabitacionesDetalles({ habitacion }) {
  const [loading, setLoading] = useState(true);
  const [alerta, setAlerta] = useState(false)
  const [alerta2, setAlerta2] = useState(false)
  const [texto, setTexto] = useState('')
  const [actualizar, setActualizar] = useState(false)
  const [reviews, setReviews] = useState([]);
  const [state, setState] = useState({
    nombre: "",
    calificacion: "",
    comentario: ""
  });

  useEffect(() => {
    async function cargarReviews() {
      const data = await ListarReviews();
      if (data === undefined) {
        setLoading(false)
        return setReviews([])
      }
      setReviews(data);
      setLoading(false);
    }
    cargarReviews();
  }, []);

  const validacion = () => {
    let claves = Object.keys(state);
    for (let i = 0; i < claves.length; i++) {
      let clave = claves[i];
      if (state[clave].trim() === '') {
        return true
      };
    }
  };

  useEffect(() => {
    async function cargarReviews2() {
      const data = await ListarReviews();
      if (data === undefined) {
        setLoading(false)
        return setReviews([])
      }
      setReviews(data);
      setLoading(false);
    }
    cargarReviews2();
  }, [actualizar])

  const cambiando = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  async function subida(e) {
    e.preventDefault();

    setAlerta(false)
    setAlerta2(false)
    const error = validacion();

    if (error) {
      setTexto('Alguno de los campos del formulario estan vacio')
      setAlerta2(true)
      return
    }

    const respuesta = await agregarReview(habitacion.nombre, state);
    if (respuesta === undefined) {
      setState({
        nombre: "",
        calificacion: "",
        comentario: ""
      })
      setActualizar(!actualizar)
      setAlerta(true)
    } else {
      setTexto('Error inesperado')
      setAlerta2(true)
    }
  }

  return (
    <>
      <ModoOscuro>
        {(isDarkMode) => (
          <>
            <div className="static h-56 bg-bgFondo1 bg-cover bg-fixed w-full">
              <div className="flex justify-center items-center w-full h-56 bg-gray-400 p-5">
                <h2 className="text-white text-3xl font-textos text-center">
                  {habitacion.nombre}
                </h2>
              </div>
            </div>
            {loading ? ( // Si los datos están cargando, mostramos el Loader
              <Loader />
            ) : (
              <>
                <section>
                  <img
                    src={habitacion.imagen_principal}
                    alt="Habitación"
                    className="h-[600px] object-cover w-full mt-40"
                  />

                  <div className="py-12 lg:py-24 px-8 md:px-16 lg:px-36">
                    <h3 className={`text-2xl p-2 mb-12 text-center ${
                            isDarkMode
                              ? `text-white`
                              : `text-black `
                          }`}>
                      Hoy se encuentra: <b>{habitacion.disponible} </b>
                    </h3>
                    <div className="grid lg:grid-cols-3 gap-28">
                      <div className="flex flex-col items-center">
                        <p className={`text-xl p-2 ${
                            isDarkMode
                              ? `text-white`
                              : `text-black `
                          }`}>
                          Precio por Noche: <b>{habitacion.tarifa}${" "}</b>
                        </p>
                        <p className={`text-xl p-2 ${
                            isDarkMode
                              ? `text-white`
                              : `text-black `
                          }`}>
                          Puntutación: <b>{habitacion.calificacion}{" "}</b>
                        </p>
                        <p className={`text-xl p-2 ${
                            isDarkMode
                              ? `text-white`
                              : `text-black `
                          }`}>
                          Número de Personas: <b>{habitacion.personas}{" "}</b>
                        </p>
                      </div>

                      <div className="flex flex-col gap-2 items-center">
                        <h4 className={`text-xl p-2 ${
                            isDarkMode
                              ? `text-white`
                              : `text-black `
                          }`}>Comodidades: </h4>
                        <ul className="list-disc">
                          <li className={`text-xl p-2 ${
                            isDarkMode
                              ? `text-white`
                              : `text-black `
                          }`}>
                            Servicio de televisión
                          </li>
                          <li className={`text-xl p-2 ${
                            isDarkMode
                              ? `text-white`
                              : `text-black `
                          }`}>
                            Servicio de Internet de Alta Velocidad
                          </li>
                          <li className={`text-xl p-2 ${
                            isDarkMode
                              ? `text-white`
                              : `text-black `
                          }`}>
                            Baño de Lujo con: tinas, lavamanos, una ducha
                            espaciosa y dos inodoros
                          </li>
                          <li className={`text-xl p-2 ${
                            isDarkMode
                              ? `text-white`
                              : `text-black `
                          }`}>
                            Una cama individual cómoda
                          </li>
                          <li className={`text-xl p-2 ${
                            isDarkMode
                              ? `text-white`
                              : `text-black `
                          }`}>
                            Acceso al balcon con vista a la playa
                          </li>
                        </ul>
                      </div>

                      <div className="flex flex-col gap-2 items-center">
                        <h4 className={`text-xl p-2 ${
                            isDarkMode
                              ? `text-white`
                              : `text-black `
                          }`}>Descripcion: </h4>
                        <p className={`text-xl p-2 ${
                            isDarkMode
                              ? `text-white`
                              : `text-black `
                          }`}>{habitacion.descripcion}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-300 w-full h-[75px] "></div>
                </section>

                <section>
                  <div className="py-12 lg:py-24 px-8 md:px-16 lg:px-36">
                    <h3 className={`text-4xl p-2 mb-12 text-center font-bold ${
                            isDarkMode
                              ? `text-white`
                              : `text-black `
                          }`}>
                      Reviews
                    </h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-48">
                      {reviews.map((review) => (
                        <Review key={review._id} review={review} />
                      ))}
                    </div>

                    <h3 className={`text-2xl p-2 my-12 text-center ${isDarkMode
                        ? `text-white`
                        : `text-black`
                        }`}>
                      ¿Ya probaste hacer tu propia review?
                    </h3>

                    <form
                      onSubmit={subida}
                      className={`w-full p-4 flex flex-col gap-4 ${isDarkMode
                        ? `bg-gradient-to-b to-dark-blueOscuro from-dark-greenMedio text-white`
                        : `bg-gradient-to-b to-green-100 from-blue-200 text-black`
                        }`}
                    >
                      <div className="flex flex-col gap-2">
                        <label htmlFor="nombre" className=" font-textos">
                          Nombre:
                        </label>
                        <input
                          className={`h-10  font-textos px-2 border ${isDarkMode
                            ? `bg-dark-blueClaro border-white focus:bg-dark-greenMedio`
                            : `bg-white border-black`
                            }`}
                          type="text"
                          name="nombre"
                          onChange={cambiando}
                          value={state.nombre}
                          id="nombre"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="calificacion" className=" font-textos">
                          Calificacion:
                        </label>
                        <input
                          className={`h-10  font-textos px-2 border ${isDarkMode
                            ? `bg-dark-blueClaro border-white focus:bg-dark-greenMedio`
                            : `bg-white border-black`
                            }`}
                          type="number"
                          min={0}
                          max={5}
                          name="calificacion"
                          onChange={cambiando}
                          value={state.calificacion}
                          id="calificacion"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="comentario" className=" font-textos">
                          Comentario:
                        </label>
                        <textarea className={` font-textos px-2 border ${isDarkMode
                          ? `bg-dark-blueClaro border-white focus:bg-dark-greenMedio`
                          : `bg-white border-black`
                          }`}
                          type="number"
                          min={0}
                          max={5}
                          name="comentario"
                          onChange={cambiando}
                          value={state.comentario}
                          id="comentario"
                          required cols="30" rows="10"></textarea>
                      </div>
                      <div className="flex justify-center w-full">
                        <button
                          className={`py-2 px-3 w-56 text-lg no-underline font-textos ${isDarkMode
                            ? `bg-white text-black hover:bg-dark-greenClaro`
                            : `bg-black text-white  hover:bg-blue-200  hover:text-black`
                            }`}
                        >
                          Comentar
                        </button>
                      </div>
                    </form>
                  </div>
                </section>
              </>
            )}
            <div className={alerta ? "bg-green-100 border-t-4 border-black rounded-b text-black px-4 py-3 shadow-md fixed top-0 w-full visible" : "fixed top-0 w-full invisible"} role="alert">
              <div className="flex">
                <div className="py-1"><svg className="fill-current h-6 w-6 text-black mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                <div className='w-full flex flex-col gap-3'>
                  <p className="font-bold font-textos text-black">Review Realizada</p>
                  <p className="text-sm font-textos text-black">Tu comentario de la habitacion se ha registrado con exito</p>
                </div>
                <IoCloseOutline
                  className='text-end text-black cursor-pointer'
                  onClick={(e) => {
                    setAlerta(false)
                  }}
                />
              </div>
            </div>

            <div className={alerta2 ? "bg-[#fee2e2] border-t-4 border-[#ef4444] rounded-b text-[#7f1d1d] px-4 py-3 shadow-md fixed top-0 w-full visible" : "fixed top-0 w-full invisible"} role="alert">
              <div className="flex w-full">
                <div className="py-1"><svg className="fill-current h-6 w-6 text-[#ef4444] mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                <div className='w-full flex flex-col gap-3'>
                  <p className="font-bold font-textos text-black">Review Fallida</p>
                  <p className="text-sm font-textos text-black">{texto}</p>
                </div>
                <IoCloseOutline
                  className='text-end text-black cursor-pointer'
                  onClick={(e) => {
                    setAlerta2(false)
                  }}
                />
              </div>
            </div>
          </>
        )}
      </ModoOscuro>
    </>
  );
}
