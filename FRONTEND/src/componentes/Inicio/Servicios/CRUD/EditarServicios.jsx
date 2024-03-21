import React, { useContext, useState } from "react";

import { EditarServicio } from "../../../../funciones/Fetch/Servicios/EditarServicio";
import { ListarServicio } from "../../../../funciones/Fetch/Servicios/ListarServicio";
import { FormEditar } from "../Formularios/FormEditar.s";

import ModoOscuro from "../../../Globales/Modo Oscuro/ModoOscuro";

import { ActualizarDatos } from "../../ServicioCarrusel";
import { Alertas } from "../../../../App";

export const ContextEditarServicios = React.createContext();

export function EditarServicios({id}) {

    const [formulario, setFormulario] = useState(false)
    const [editadoServicio, setEditadoServicio] = useState({
        titulo: "",
        descripcion:"",
        image: ""
    });

    const { setActualizar } = useContext(ActualizarDatos)
    const {setAlerta, setMensaje} = useContext(Alertas)

    const handleInputChange = (e) => {
        setEditadoServicio({ ...editadoServicio, [e.target.name]: e.target.value})
    };

    const handleImageChange = (e) => {
        setEditadoServicio({ ...editadoServicio, image: e.target.files[0] });
    }; 
    
    const MostrarFormulario = (e) => {
        e.preventDefault();
        formulario ? setFormulario(false) : setFormulario(true)
    }

    const Obtener = async (e) => {
        e.preventDefault();
        console.log(id)
        try {
            const documentos = await ListarServicio();
            const editar = documentos.find(d => d._id === id)
            // console.log(editar)
            return setEditadoServicio(editar)
        } catch (error) {
            console.log("Error:", error)
            throw error
        }
    }
    
    const Editar = async (e) => {
        e.preventDefault();
        // console.log('soy Editado servicio', editadoServicio);
        
        try {  
            const enviado = await EditarServicio(editadoServicio, id)
            // console.log(enviado)
            setEditadoServicio({
                titulo: "",
                descripcion:"",
                image: ""
            });
            setMensaje('Servicio editado correctamente.')
            setAlerta(1)
            setActualizar(true);
            
        } catch (error) {
            // console.log('soy error en servicio', error)
            
            setMensaje(error)
            setAlerta(2)
        }
    };


    return(<>
        <ContextEditarServicios.Provider value={{MostrarFormulario, handleInputChange, handleImageChange, Editar, editadoServicio}}>
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
        </ContextEditarServicios.Provider>
    </>)
}