import { useContext } from "react"
import { ContextAgregarOfertas } from "../CRUD/AgregarOfertas"

//iconos
import { IoCloseOutline } from "react-icons/io5";

//estilo
import { Form } from "react-bootstrap";

export function FormAgregar() {

    const {MostrarFormulario, handleInputChange, handleImageChange, Agregar, nuevaOferta} = useContext(ContextAgregarOfertas)

    return(<>
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-400 '>
            <Form className='w-11/12 h-5/6 bg-dark-blueClaro border-4 border-white overflow-y-auto px-5 py-6 flex flex-col justify-start items-center gap-4 sm:w-3/5' encType="multipart/form-data">
                <div className="">
                    <button onClick={(e) => MostrarFormulario(e)}><IoCloseOutline/></button>
                </div>

                <div className="w-full">
                    <h4 className='text-center mb-4'>Agregar Oferta</h4>

                    <Form.Group className="mb-3" controlId="titulo">
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control type="text" name="titulo" placeholder="Especial de Navidad 20% de Descuento" value={nuevaOferta.titulo} onChange={handleInputChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="descripcion">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control type="text" name="descripcion" placeholder="Para estas navidades..." value={nuevaOferta.descripcion} onChange={handleInputChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="fecha_expiracion">
                        <Form.Label>Fecha de Expiración</Form.Label>
                        <Form.Control type="date" name="fecha_expiracion" value={nuevaOferta.fecha_expiracion} onChange={handleInputChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="image">
                        <Form.Label>Imagen Representativa</Form.Label>
                        <Form.Control type="file" name="image" onChange={handleImageChange}/>
                    </Form.Group>

                    <div>
                        <button onClick={Agregar}>ENVIAR</button>
                    </div>
                </div>
            </Form>
        </div>
    </>)
}