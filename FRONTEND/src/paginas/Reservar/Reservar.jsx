import { useState, useEffect, useContext } from 'react'
import { Mostrar } from '../../App'

import habitaciones from '../../data/Habitaciones.json'

export function Reservar() {

    const {setBotonRMostrar} = useContext(Mostrar);
    useEffect(() => {
        setBotonRMostrar(false)
        return () => {
            setBotonRMostrar(true);
        };
    }, []);

    const [alerta, setAlerta] = useState(false)
    const [alerta2, setAlerta2] = useState(false)
    const [texto, setTexto] = useState('')
    const [state, setState] = useState({
        nombre: "",
        cedula: "",
        correo: "",
        fechaInicio: "",
        fechaSalida: "",
        habitacion: "",
        cantidad: ""
    });

    const validacion = () => {
        let claves = Object.keys(state);
        for (let i = 0; i < claves.length; i++) {
            let clave = claves[i];
            if (state[clave].trim() === '') {
                return true
            };
        }
    };

    const validarCorreo = () => {
        const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

        if (emailRegex.test(state.correo)) {
            return false
        } else {
            return true
        }
    }

    const cambiando = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const subida = (e) => {
        e.preventDefault();

        setAlerta(false)
        setAlerta2(false)
        const error = validacion();
        const errorCorreo = validarCorreo()

        if (error) {
            setTexto('Alguno de los campos del formulario estan vacio')
            setAlerta2(true)
            return
        }

        if (errorCorreo) {
            setTexto('El correo que has ingresado no es valido')
            setAlerta2(true)
            return
        }

        fetch(`http://localhost:3000/correo`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(state)
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 200) {
                    setState({
                        nombre: "",
                        cedula: "",
                        correo: "",
                        fechaInicio: "",
                        fechaSalida: "",
                        habitacion: "",
                        cantidad: ""
                    })
                    setAlerta(true)
                }

            })
    };

    return (
        <>

            <div className='bg-landingFondo1 bg-cover bg-fixed shadow-2xl h-[25vh]'>
                <section className='bg-gray-300 flex flex-col items-center justify-center w-full text-center gap-16 py-16 h-full'>
                    <h3 className='text-white font-bold text-3xl font-textos text-center w-4/5'>Realiza tu Reserva</h3>
                </section>
            </div>

            <section className="sm:px-4 py-8 md:py-24 md:px-36 lg::px-24 h-auto w-full">
                <form action="" onSubmit={subida} className="w-full bg-gradient-to-b to-green-100 from-blue-200 p-4 flex flex-col gap-4">
                    <h3 className="text-black text-xl font-bold font-textos text-center my-4">Ingresa lo Solicitado</h3>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="nombre" className="text-black font-textos">Nombre Completo:</label>
                        <input
                            className="h-10 text-black font-textos px-2 border border-black"
                            type="text"
                            name="nombre"
                            onChange={cambiando}
                            value={state.nombre}
                            id="nombre" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="cedula" className="text-black font-textos">Cedula de Identidad:</label>
                        <input
                            className="h-10 text-black font-textos px-2 border border-black"
                            type="number"
                            name="cedula"
                            onChange={cambiando}
                            value={state.cedula}
                            id="cedula" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="correo" className="text-black font-textos">Correo:</label>
                        <input
                            className="h-10 text-black font-textos px-2 border border-black"
                            type="email"
                            name="correo"
                            onChange={cambiando}
                            value={state.correo}
                            id="correo" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-auto">
                        <div className="flex flex-col gap-2 w-auto">
                            <label htmlFor="fechaInicio" className="text-black font-textos">Dia de Entrada:</label>
                            <input
                                className="h-10 text-black font-textos px-1 border border-black"
                                type="date"
                                name="fechaInicio"
                                onChange={cambiando}
                                value={state.fechaInicio}
                                id="fechaInicio" />
                        </div>
                        <div className="flex flex-col gap-2 w-auto">
                            <label htmlFor="fechaSalida" className="text-black font-textos">Dia de Salida:</label>
                            <input
                                className="h-10 text-black font-textos px-1 border border-black"
                                type="date"
                                name="fechaSalida"
                                onChange={cambiando}
                                value={state.fechaSalida}
                                id="fechaSalida" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="habitacion" className="text-black font-textos">Habitacion a Reservar:</label>
                        <select
                            className="h-10 text-black font-textos px-2 border border-black"
                            name="habitacion"
                            onChange={cambiando}
                            value={state.habitacion}
                            id="habitacion">
                            <option value=""></option>
                            {
                                habitaciones.map((habitacion, id) => (
                                    <option key={id}>{habitacion.nombre}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="cantidad" className="text-black font-textos">Cantidad de Personas (Max 5):</label>
                        <select
                            className="h-10 text-black font-textos px-2 border border-black"
                            name="cantidad"
                            onChange={cambiando}
                            value={state.cantidad}
                            id="cantidad">
                            <option value=""></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <div className='flex justify-center w-full'>
                        <button
                            className='bg-black text-white my-16 py-3 px-5 w-56 text-xl hover:bg-blue-200 no-underline hover:text-black'
                        >Reservar</button>
                    </div>
                </form>
            </section>

            <div className={alerta ? "bg-[#ccfbf1] border-t-4 border-[#14b8a6] rounded-b text-[#134e4a] px-4 py-3 shadow-md fixed top-0 w-full visible" : "fixed top-0 w-full invisible"} role="alert">
                <div className="flex">
                    <div className="py-1"><svg className="fill-current h-6 w-6 text-[#14b8a6] mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                    <div className='w-1/2'>
                        <p className="font-bold font-textos text-black">Reservacion Realizada</p>
                        <p className="text-sm font-textos text-black">Tu habitacion ha sido reservada con exito, revisa tu correo electronico para ver tu confirmacion</p>
                    </div>
                    <span
                        className='w-full text-end font-textos text-black cursor-pointer'
                        onClick={(e) => {
                            setAlerta(false)
                        }}
                    >X</span>
                </div>
            </div>

            <div className={alerta2 ? "bg-[#fee2e2] border-t-4 border-[#ef4444] rounded-b text-[#7f1d1d] px-4 py-3 shadow-md fixed top-0 w-full visible" : "fixed top-0 w-full invisible"} role="alert">
                <div className="flex">
                    <div className="py-1"><svg className="fill-current h-6 w-6 text-[#ef4444] mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                    <div className='w-1/2'>
                        <p className="font-bold font-textos text-black">Reservacion Fallida</p>
                        <p className="text-sm font-textos text-black">{texto}</p>
                    </div>
                    <span
                        className='w-full text-end font-textos text-black cursor-pointer'
                        onClick={(e) => {
                            setAlerta2(false)
                        }}
                    >X</span>
                </div>
            </div>
        </>
    )
}