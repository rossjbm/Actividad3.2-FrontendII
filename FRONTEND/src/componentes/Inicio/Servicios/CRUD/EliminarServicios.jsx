import { useContext, useEffect, useState } from "react";

import { BorrarServicio } from "../../../../funciones/Fetch/Servicios/BorrarServicio";
import ModoOscuro from "../../../Globales/Modo Oscuro/ModoOscuro";

import { ActualizarDatos } from "../../ServicioCarrusel";
import { Alertas } from "../../../../App";

export function EliminarServicios({id}) {

    const {setActualizar} = useContext(ActualizarDatos);
    const {setAlerta, setMensaje, borrar, setBorrar} = useContext(Alertas);
    const [idBorrar, setIdBorrar] = useState()
    // console.log(id)

    useEffect(() => {
        if (borrar && id === idBorrar) {
            const Borrar = async () => {
                try {  
                    // console.log('soy id si borrar es true',id)
                    const ver = await BorrarServicio(id)
                    // console.log(ver)
                    // console.log('estamos borrando');
                    setActualizar(true)
                    setMensaje('Se ha eliminado correctamente el servicio.')
                    setAlerta(1)
                    setBorrar(false)
                    setIdBorrar(null)
                    
                } catch (error) {
                    console.log('soy error en servicio', error)
                    
                    setMensaje(error)
                    setAlerta(2)
                }
            };
            Borrar();
        }
    }, [borrar, idBorrar]);

    return(<>
        <ModoOscuro>
            {(isDarkMode) => (
                <button onClick={() => {setAlerta(3); setIdBorrar(id); console.log('soy id en boton',id);}} className={`p-2 font-light bg-[#aa170c] hover:!outline ${isDarkMode ? `` : ``} `}>BORRAR</button>
            )}
        </ModoOscuro>
    </>)

}