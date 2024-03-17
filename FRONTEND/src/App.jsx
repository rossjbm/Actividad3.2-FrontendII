import React from "react";

import { Inicio } from "./paginas/Inicio/Inicio";
import { Landing } from "./paginas/Landing/Landing";
import { Encabezado } from "./componentes/Encabezado/Encabezado";
import { Ofertas } from "./paginas/Ofertas/Ofertas";
import { Reservar } from "./paginas/Reservar/Reservar";
import { Error } from "./paginas/NotFound/Error";
import { BotonReservar } from "./componentes/botones/BotonReservar";
import { Pie } from "./componentes/PiePagina/Pie";
import { Habitaciones } from "./paginas/Habitaciones/Habitaciones";
import { Contacto } from "./paginas/Contacto/Contacto";
import { Pago } from "./paginas/Pago/Pago";
import { Clima } from "./componentes/clima/Clima";
import { Blog } from "./paginas/Blog/Blog";
import ModoOscuro from "./componentes/Modo Oscuro/ModoOscuro";


// REACT ROUTER
import { Routes, Route} from "react-router-dom";
import { useState, useContext } from "react";
import { isDragActive } from "framer-motion";


export const Mostrar = React.createContext();

export function App() {
    const [headerMostrar, setHeaderMostrar] = useState(true)
    const [botonRMostrar, setBotonRMostrar] = useState(true)
    const [pieMostrar, setPieMostrar] = useState(true)
    const [climaMostrar, setClimaMostrar] = useState(true)

    return (<>
        {headerMostrar ? <Encabezado/> : null}
        {climaMostrar ? <Clima/> : null}
        <ModoOscuro>
            {(isDarkMode) => (
                <main className={`min-h-[400px] md:min-h-[500px] lg:min-h-[350px] ${isDarkMode ? `bg-dark-blueClaro` : `bg-white`}`} >
                    <Mostrar.Provider value={{ setHeaderMostrar, setBotonRMostrar, setPieMostrar, setClimaMostrar }}>
                        <Routes>
                            <Route path="/" element={<Landing/>} />
                            <Route path="/inicio" element={<Inicio/>} />
                            <Route path="/ofertas" element={<Ofertas/>} />
                            <Route path="/habitaciones" element={<Habitaciones/>} />
                            <Route path="/blog" element={<Blog/>} />
                            <Route path="/pagos" element={<Pago/>} />
                            <Route path="/contacto" element={<Contacto/>} />
                            <Route path="/reservar" element={<Reservar/>} />
                            <Route path="*" element={<Error/>} />
                        </Routes>
                    </Mostrar.Provider>
                </main>
            )}
        </ModoOscuro>
        {pieMostrar ? <Pie/> : null}
        {botonRMostrar ? <BotonReservar/> : null}
        
        
    </>);
}

