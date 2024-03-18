import React, { useState } from "react";
import { FormAgregar } from "../Formularios/FormAgregar.o";
import { CrearOfertas } from "../../../funciones/Fetch/Ofertas/CrearOfertas";

export const ContextAgregarOfertas = React.createContext();

export function AgregarOfertas() {

    const [formulario, setFormulario] = useState(false)

    const [nuevaOferta, setNuevaOferta] = useState({
        titulo: "",
        descripcion:"",
        fecha_expiracion: "",
        image: ""
    });

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
        console.log('soy nueva oferta', nuevaOferta);
        
        try {  
            const enviado = await CrearOfertas(nuevaOferta)
            setNuevaOferta({
                titulo: "",
                descripcion:"",
                fecha_expiracion: "",
                image: ""
            });
            
        } catch (error) {
            console.log('error', error)
        }
    };


    return(<>
        <ContextAgregarOfertas.Provider value={{MostrarFormulario, handleInputChange, handleImageChange, Agregar, nuevaOferta}}>
            <div className={`flex flex-col justify-center m-20 w-auto h-auto`}>
                <button onClick={(e) => MostrarFormulario(e)} className='text-2xl text-white'>AÑADIR</button>
            </div>
            {formulario ? 
                <FormAgregar/>
            : null }
        </ContextAgregarOfertas.Provider>
    </>)
}