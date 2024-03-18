import {motion, useScroll, useTransform} from "framer-motion";
import ModoOscuro from "../Globales/Modo Oscuro/ModoOscuro";

import React, {useRef} from "react";

export function Parallax() {

    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })
    const fondoY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const tituloY = useTransform(scrollYProgress, [0, 1], ["0%", "250%"]);

    return (<>
        <ModoOscuro>
            {(isDarkMode) => (
                <div ref={ref} className="w-full h-screen overflow-hidden relative grid place-items-center m-0">
                    <motion.h1 style={{ y : tituloY}} className={`text-5xl relative z-10 font-textos sm:text-7xl ${isDarkMode ? ' text-white' : 'text-black'}`} >
                        Hazbin<span className="font-titulos">Hotel</span>
                    </motion.h1>
                    <motion.div style={{ y : fondoY}} className={`absolute inset-0 z-0 bg-cover bg-bottom ${isDarkMode ? ' bg-parallaxFondo1mo' : 'bg-parallaxFondo1'}`} >
                    </motion.div>
                    <div className={`absolute inset-0 z-20 bg-cover bg-bottom ${isDarkMode ? ' bg-parallaxFondo2mo' : 'bg-parallaxFondo2'}`}>
                    </div>
                </div>
            )}
        </ModoOscuro>
    </>)
}