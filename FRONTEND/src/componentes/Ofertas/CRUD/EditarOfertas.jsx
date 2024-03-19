import React, { useContext, useState } from "react";

import { EditOfertas } from "../../../funciones/Fetch/Ofertas/EditOfertas";
import { ListarOfertas } from "../../../funciones/Fetch/Ofertas/ListarOfertas";
import { FormEditar } from "../Formularios/FormEditar.o";

import ModoOscuro from "../../Globales/Modo Oscuro/ModoOscuro";

import { ActualizarDatos } from "../../../paginas/Ofertas/Ofertas";

export const ContextEditarOfertas = React.createContext();

export function EditarOfertas({id}) {

    const [formulario, setFormulario] = useState(false)
    const [editadaOferta, setEditadaOferta] = useState({
        titulo: "",
        descripcion:"",
        fecha_expiracion: "",
        image: ""
    });

    const { setActualizar } = useContext(ActualizarDatos)

    const handleInputChange = (e) => {
        setEditadaOferta({ ...editadaOferta, [e.target.name]: e.target.value})
    };

    const handleImageChange = (e) => {
        setEditadaOferta({ ...editadaOferta, image: e.target.files[0] });
    }; 
    
    const MostrarFormulario = (e) => {
        e.preventDefault();
        formulario ? setFormulario(false) : setFormulario(true)
    }

    const Obtener = async (e) => {
        e.preventDefault();
        console.log(id)
        try {
            const documentos = await ListarOfertas();
            const editar = documentos.habitaciones.find(d => d._id === id)
            console.log(editar)
            return setEditadaOferta(editar)
        } catch (error) {
            console.log("Error:", error)
            throw error
        }
    }
    
    const Editar = async (e) => {
        e.preventDefault();
        console.log('soy Editada oferta', editadaOferta);
        
        try {  
            const enviado = await EditOfertas(editadaOferta, id)
            console.log(enviado)
            setEditadaOferta({
                titulo: "",
                descripcion:"",
                fecha_expiracion: "",
                image: ""
            });
            setActualizar(true);
            
        } catch (error) {
            console.log('error', error)
        }
    };


    return(<>
        <ContextEditarOfertas.Provider value={{MostrarFormulario, handleInputChange, handleImageChange, Editar, editadaOferta}}>
            <ModoOscuro>
                {(isDarkMode) => (
                    <>
                    <button onClick={(e) => {MostrarFormulario(e), Obtener(e)}} className={`p-2 font-light bg-[#b87400] hover:!outline`}>EDITAR</button>
                    {formulario ? 
                        <FormEditar/>
                    : null }
                    </>
                )}
            </ModoOscuro>
        </ContextEditarOfertas.Provider>
    </>)
}