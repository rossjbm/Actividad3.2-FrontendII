import ModoOscuro from "../../componentes/Modo Oscuro/ModoOscuro"

export function Pago(){
    return(<>
        <ModoOscuro>
            {(isDarkMode) => (
                <section className="flex flex-col">
                    <div className="static h-56 bg-bgFondo1 bg-cover bg-fixed w-full ">
                        <div className="flex justify-center items-center w-full h-56 bg-gray-400 p-5">
                            <h2 className="text-white text-3xl font-textos text-center">Métodos de Pago</h2>
                        </div>
                    </div>
                    <div className={`flex flex-col items-center gap-10 md:gap-16 text-center font-textos p-10 md:px-40 my-10 ${isDarkMode ? `text-white` : `text-black`}`}>
                        <h4 className="text-2xl font-bold">Ofrecemos Diversas Opciones de Pago para la Comodidad de Nuestros Huéspedes</h4>
                        <div className={`p-5 flex flex-col gap-4 ${isDarkMode ? `bg-dark-greenMedio` : `bg-gradient-to-t from-blue-200 to-green-100`}`}>
                            <h5 className="text-xl font-bold" >Tarjetas de Crédito y Débito</h5>
                            <p className="text-lg text-justify">Las tarjetas Visa, Mastercard, American Express y otras son ampliamente aceptadas en HazbinHotel. Los huéspedes pueden realizar pagos directamente con sus tarjetas en la recepción o al hacer reservas en línea.</p>
                        </div>
                        <div className={`p-5 flex flex-col gap-4 ${isDarkMode ? `bg-dark-greenMedio` : `bg-gradient-to-t from-blue-200 to-green-100`}`}>
                            <h5 className="text-xl font-bold">Pago en Efectivo</h5>
                            <p className="text-lg text-justify" >Aunque la tendencia es hacia métodos digitales, en HazbinHotel aceptamos pagos en efectivo si así lo prefieren los huéspedes, solo en dólares.</p>
                        </div>
                        <div className={`p-5 flex flex-col gap-4 ${isDarkMode ? `bg-dark-greenMedio` : `bg-gradient-to-t from-blue-200 to-green-100`}`}>
                            <h5 className="text-xl font-bold">Transferencias Bancarias</h5>
                            <p className="text-lg text-justify" >Permitimos que los huéspedes que no prefieran usar efectivo o tarjetas puedan realizar tranquilamente sus pagos de estadía por transferencias bancarias.</p>
                        </div>
                    </div>
                </section>
            )}
        </ModoOscuro>
    </>)
}