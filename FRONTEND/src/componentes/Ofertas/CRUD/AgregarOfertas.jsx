import React, { useState, useContext } from "react";
import { FormAgregar } from "../Formularios/FormAgregar.o";
import { CrearOfertas } from "../../../funciones/Fetch/Ofertas/CrearOfertas";
import ModoOscuro from "../../Globales/Modo Oscuro/ModoOscuro";

export const ContextAgregarOfertas = React.createContext();
import { ActualizarDatos } from "../../../paginas/Ofertas/Ofertas";
import { Alertas } from "../../../App";

export function AgregarOfertas() {

    const [formulario, setFormulario] = useState(false)

    const [nuevaOferta, setNuevaOferta] = useState({
        titulo: "",
        descripcion:"",
        fecha_expiracion: "",
        image: ""
    });

    const { setActualizar } = useContext(ActualizarDatos)
    const {setAlerta, setMensaje} = useContext(Alertas)

    const handleInputChange = (e) => {
        setNuevaOferta({ ...nuevaOferta, [e.target.name]: e.target.value})
    };

    const handleImageChange = (e) => {
        setNuevaOferta({ ...nuevaOferta, image: e.target.files[0] });
    }; 
    
    const MostrarFormulario = (e) => {
        e.preventDefault();
        formulario ? setFormulario(false) : setFormulario(true)
    }
    
    const Agregar = async (e) => {
        e.preventDefault();
        // console.log('soy nueva oferta', nuevaOferta);
        
        try {  
            const enviado = await CrearOfertas(nuevaOferta)
            setNuevaOferta({
                titulo: "",
                descripcion:"",
                fecha_expiracion: "",
                image: ""
            });
            setMensaje('La oferta de ha agregado correctamente.')
            setAlerta(1)
            setActualizar(true);
            
        } catch (error) {
            console.log('error', error)
            setMensaje(error)
            setAlerta(2)
        }
    };


    return(<>
        <ContextAgregarOfertas.Provider value={{MostrarFormulario, handleInputChange, handleImageChange, Agregar, nuevaOferta}}>
            <ModoOscuro>
                {(isDarkMode) => (
                    <>
                    <div className={`flex flex-col justify-center items-center m-20 w-auto h-auto`}>
                        <button onClick={(e) => MostrarFormulario(e)} className={`font-textos text-2xl border-2 w-4/5 xl:w-3/5 py-2 ${isDarkMode ? `text-white bg-transparent border-white hover:!bg-gray-400`: `text-black border-black hover:bg-green-100`} `}>Agrega una Nueva Oferta</button>
                    </div>
                    {formulario ? 
                        <FormAgregar/>
                    : null }
                    </>
                )}
            </ModoOscuro>
        </ContextAgregarOfertas.Provider>
    </>)
}