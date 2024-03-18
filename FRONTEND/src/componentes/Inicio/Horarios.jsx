import ModoOscuro from "../Globales/Modo Oscuro/ModoOscuro"

export function Horarios() {
    return(<ModoOscuro>
        {(isDarkMode) => (
            <>
                <section className={`p-5 border-2 flex flex-col gap-4 justify-start items-center ${isDarkMode ? 'dark:text-white bg-dark-greenMedio border-white' : 'border-black bg-white text-black'}`}>
                    <h4 className="text-xl font-semibold">Atención al Cliente</h4>
                    <p className={`text-lg font-bold px-2 py-1 ${isDarkMode ? 'dark:text-white bg-dark-blueClaro' : 'bg-blue-200 text-black'}`} >24 horas del día</p>
                    <p className="text-center text-xl">Nuestro personal de recepción está siempre disponible para ayudarte con cualquier necesidad que tengas durante tu estancia</p>
                </section>
                <section className={`p-5 border-2 flex flex-col gap-4 justify-start items-center ${isDarkMode ? 'dark:text-white bg-dark-greenMedio border-white' : 'border-black bg-white text-black'}`}>
                    <h4 className="text-xl font-semibold">Restaurante Gourmet</h4>
                    <p className={`text-lg font-bold px-2 py-1 ${isDarkMode ? 'dark:text-white bg-dark-blueClaro' : 'bg-blue-200 text-black'}`}>7:00 a.m a 10:00 p.m</p>
                    <p className="text-center text-xl">Comienza tu día con un desayuno buffet, y puedes disfrutar todo el día de servicios al cuarto</p>
                </section>
                <section className={`p-5 border-2 flex flex-col gap-4 justify-start items-center ${isDarkMode ? 'dark:text-white bg-dark-greenMedio border-white' : 'border-black bg-white text-black'}`}>
                    <h4 className="text-xl font-semibold">Spa de Relajación</h4>
                    <p className={`text-lg font-bold px-2 py-1 ${isDarkMode ? 'dark:text-white bg-dark-blueClaro' : 'bg-blue-200 text-black'}`}>9:00 a.m a 6:00 p.m</p>
                    <p className="text-center text-xl">Te recomendamos hacer una reserva del spa con anticipación para disfrutar tu día de relajación</p>
                </section>
                <section className={`p-5 border-2 flex flex-col gap-4 justify-start items-center ${isDarkMode ? 'dark:text-white bg-dark-greenMedio border-white' : 'border-black bg-white text-black'}`}>
                    <h4 className="text-xl font-semibold">Piscina</h4>
                    <p className={`text-lg font-bold px-2 py-1 ${isDarkMode ? 'dark:text-white bg-dark-blueClaro' : 'bg-blue-200 text-black'}`}>6:00 a.m a 10:00 p.m</p>
                    <p className="text-center text-xl">Nuestra piscina al aire libre es el lugar perfecto para relajarse y disfrutar del sol desde temprano</p>
                </section>
                <section className={`p-5 border-2 flex flex-col gap-4 justify-start items-center ${isDarkMode ? 'dark:text-white bg-dark-greenMedio border-white' : 'border-black bg-white text-black'}`}>
                    <h4 className="text-xl font-semibold">Actividades Recreativas</h4>
                    <p className={`text-lg font-bold px-2 py-1 ${isDarkMode ? 'dark:text-white bg-dark-blueClaro' : 'bg-blue-200 text-black'}`}>Depende de la Actividad</p>
                    <p className="text-center text-xl">Las actividades programadas, como deportes acuáticos y excursiones, generalmente se realizan durante el día</p>
                </section>
                <section className={`p-5 border-2 flex flex-col gap-4 justify-start items-center ${isDarkMode ? 'dark:text-white bg-dark-greenMedio border-white' : 'border-black bg-white text-black'}`}>
                    <h4 className="text-xl font-semibold">Gimnasio</h4>
                    <p className={`text-lg font-bold px-2 py-1 ${isDarkMode ? 'dark:text-white bg-dark-blueClaro' : 'bg-blue-200 text-black'}`}>24 horas del día</p>
                    <p className="text-center text-xl">Nuestro gimnasio está disponible para los huéspedes que deseen mantener su rutina de ejercicios durante su estancia</p>
                </section>
            </>
        )}
    </ModoOscuro>)
}