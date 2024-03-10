import { Accordion } from "react-bootstrap";
import { Clima } from "../../componentes/clima/Clima";
import data from "../../data/Blog.json"
import { useState } from "react";

export function Blog() {
const [articulos,setAticulos] =useState(data)
    return (<>
        <section className="min-h-screen bg-white" >
            {articulos.map(articulo=>(
                <article className="w-full">
                    <div className="relative overflow-hidden flex min-h-60 md:min-h-96 h-auto w-full justify-center items-center" >
                        <img className="absolute w-full object-cover" src={articulo.imagen} alt="" />
                        <div className=" bg-white w-11/12 md:w-auto md:px-20 md:m-20 drop-shadow-md rounded-md p-3">
                            <p className="md:text-4xl font-titulos text-center w-full text-gray-700">
                                {articulo.titulo}
                            </p>
                        </div>
                    </div>
                    <div className="p-10">
                        <Accordion className="md:mb-16">
                            <Accordion.Item eventKey="0">   
                                <Accordion.Header>         
                                    <p className="text-justify md:text-2xl w-full p-3">
                                    {articulo.descripcion}
                                    </p>
                                </Accordion.Header>
                                <Accordion.Body className="font-textos">
                                    {articulo.leer_mas.map(leer_mas=>(
                                        <article>
                                            <p className="font-titulos md:text-3xl md:py-14 text-2xl py-2">{leer_mas.titulo}</p> 
                                            <p className="md:pb-14 md:text-2xl pb-3"> {leer_mas.descripcion}</p>
                                        </article>
                                    ))}
                                </Accordion.Body>
                            </Accordion.Item>
                                        
                        </Accordion>
                    </div>
                </article>
            ))}
        </section>
            <Clima/>
    </>
    );
}
