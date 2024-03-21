import { useContext } from "react"
import { ContextAgregarServicios } from "../CRUD/AgregarServicios"

//iconos
import { IoCloseOutline } from "react-icons/io5";

//estilo
import { Form } from "react-bootstrap";

//modo oscuro
import ModoOscuro from "../../../Globales/Modo Oscuro/ModoOscuro";

export function FormAgregar() {

    const {MostrarFormulario, handleInputChange, handleImageChange, Agregar, nuevoServicio} = useContext(ContextAgregarServicios)

    return(<>
        <ModoOscuro>
            {(isDarkMode) => (
                <div className='fixed pt-4 sm:pt-auto top-0 left-0 w-full h-full flex justify-center items-start sm:items-center bg-gray-400 z-30'>
                    <Form data-bs-theme={isDarkMode ? "dark" : "light"} className={`w-11/12 h-5/6 border-4 overflow-y-auto px-5 pt-9 flex flex-col justify-start items-center sm:w-3/5 xl:w-1/2 ${isDarkMode ? `bg-dark-greenMedio  border-white `:`bg-gradient-to-b to-green-100 from-blue-200 border-black`}`} encType="multipart/form-data">
        
                        <div className={`w-full font-textos flex flex-col gap-6 ${isDarkMode ? `text-white` : `text-black`}`}>
                            <div className={`relative `}>
                                <button onClick={(e) => MostrarFormulario(e)} className={`absolute top-0 right-0`}><IoCloseOutline className={`text-3xl `}/></button>
                                <h4 className={`text-center text-xl mb-4`}>Agregar Servicio</h4>
                            </div>
        
                            <Form.Group className="mb-3" controlId="titulo">
                                <Form.Label className="text-lg">Título</Form.Label>
                                <Form.Control required type="text" name="titulo" placeholder="Bar Nocturno" value={nuevoServicio.titulo} onChange={handleInputChange} className={` placeholder:text-sm placeholder:text-gray-200 ${isDarkMode ? `bg-gray-400 border-white focus:bg-gray-400 text-base p-2`: `border-black`}`}/>
                            </Form.Group>
        
                            <Form.Group className="mb-3" controlId="descripcion">
                                <Form.Label className="text-lg">Descripción</Form.Label>
                                <Form.Control required type="text" name="descripcion" placeholder="Contamos con un bar de lujo..." value={nuevoServicio.descripcion} onChange={handleInputChange} className={` placeholder:text-sm placeholder:text-gray-200 ${isDarkMode ? `bg-gray-400 border-white focus:bg-gray-400 text-base p-2`: `border-black`}`}/>
                            </Form.Group>
        
                            <Form.Group className="mb-3" controlId="image">
                                <Form.Label className="text-lg">Imagen Representativa</Form.Label>
                                <Form.Control required type="file" name="image" onChange={handleImageChange} className={` placeholder:text-sm placeholder:text-gray-200 ${isDarkMode ? `bg-gray-400 border-white focus:bg-gray-400 text-base p-2`: `border-black`}`}/>
                            </Form.Group>
        
                            <div className="flex justify-center items-center my-5">
                                <button onClick={Agregar} className={` w-1/2 md:w-2/6 h-10 border-2 ${isDarkMode ? ` border-dark-blueClaro bg-dark-blueClaro hover:border-white hover:bg-transparent`:`bg-black text-white border-black hover:text-black hover:bg-transparent`}`}>Enviar</button>
                            </div>
                        </div>
                    </Form>
                </div>
            )}
        </ModoOscuro>
    </>)
}