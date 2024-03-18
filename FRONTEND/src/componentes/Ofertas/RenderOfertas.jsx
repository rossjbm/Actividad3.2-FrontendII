import ModoOscuro from "../Globales/Modo Oscuro/ModoOscuro"

export function RenderOfertas({ofertas}) {

    const fechaExacta = ((fecha) => {
        let fechaNueva = new Date(fecha);
        let fechaFormateada = fechaNueva.toLocaleDateString();
        return fechaFormateada
    })

    return(
        <ModoOscuro>
            {(isDarkMode) => (
                ofertas.length === 0 ? 
                <div className={`py-20 flex justify-center items-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    <h2 className="text-xl">No Hay Ofertas Disponibles</h2>
                </div>
                :
                <div className='grid grid-cols-1 gap-14 py-20 xl:grid-cols-2 xl:px-20'>
                    {
                        ofertas.map(oferta => (
                            <section key={oferta._id} className={`md:grid md:grid-cols-2 ${isDarkMode ? `bg-dark-greenMedio` : `bg-gray-300`}`} >
                            <div>
                                <img src={`http://localhost:3000/images/${oferta.imagen}`} alt="Oferta" className='h-72 xl:h-full object-cover w-full'/>
                            </div>
                            <div className='flex flex-col gap-4 p-4 justify-around items-center text-white font-textos'>
                                <h3 className='text-2xl text-center'>{oferta.titulo}</h3>
                                <p className={`text-xl p-2 font-bold ${isDarkMode ? `text-white bg-dark-blueClaro` : `bg-blue-200  text-black `}`}>{fechaExacta(oferta.fecha_expiracion)}</p>
                                <p className='text-center'>{oferta.descripcion}</p>
                            </div>
                            </section>
                        ))
                    }
                </div>
                
            )}
        </ModoOscuro>
    )
}