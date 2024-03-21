import React, { useState, useContext } from "react";
import { FormAgregar } from "../Formularios/FormAgregar.s";
import { CrearServicio } from "../../../../funciones/Fetch/Servicios/CrearServicio";
import ModoOscuro from "../../../Globales/Modo Oscuro/ModoOscuro";

export const ContextAgregarServicios = React.createContext();

import { Alertas } from "../../../../App";
import { ActualizarDatos } from "../../ServicioCarrusel";

export function AgregarServicios() {

    const [formulario, setFormulario] = useState(false)

    const [nuevoServicio, setNuevoServicio] = useState({
        titulo: "",
        descripcion:"",
        image: ""
    });

    const { setActualizar } = useContext(ActualizarDatos)
    const {setAlerta, setMensaje} = useContext(Alertas)

    const handleInputChange = (e) => {
        setNuevoServicio({ ...nuevoServicio, [e.target.name]: e.target.value})
    };

    const handleImageChange = (e) => {
        setNuevoServicio({ ...nuevoServicio, image: e.target.files[0] });
    }; 
    
    const MostrarFormulario = (e) => {
        e.preventDefault();
        formulario ? setFormulario(false) : setFormulario(true)
    }
    
    const Agregar = async (e) => {
        e.preventDefault();
        // console.log('soy nuevo servicio', nuevoServicio);
        
        try {  
            const enviado = await CrearServicio(nuevoServicio)
            setNuevoServicio({
                titulo: "",
                descripcion:"",
                image: ""
            });
            setMensaje('Servicio ha agregado correctamente.')
            setAlerta(1)
            setActualizar(true);
            
        } catch (error) {
            console.log('error', error)
            setMensaje(error)
            setAlerta(2)
        }
    };


    return(<>
        <ContextAgregarServicios.Provider value={{MostrarFormulario, handleInputChange, handleImageChange, Agregar, nuevoServicio}}>
            <ModoOscuro>
                {(isDarkMode) => (
                    <>
                    <div className={`flex flex-col justify-center items-center mb-5 mt--5 w-auto h-auto`}>
                        <button onClick={(e) => MostrarFormulario(e)} className={`font-textos text-xl border-2 w-4/5 xl:w-3/5 py-2 ${isDarkMode ? `text-white bg-transparent border-white hover:!bg-gray-400`: `text-black border-black hover:bg-green-100`} `}>Agrega un Servicio</button>
                    </div>
                    {formulario ? 
                        <FormAgregar/>
                    : null }
                    </>
                )}
            </ModoOscuro>
        </ContextAgregarServicios.Provider>
    </>)
}