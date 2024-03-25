import { Sesion , Alertas } from "../../App";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button'
import { AlertaConfirmar } from "../../componentes/Alertas/AlertaConfirmar";
import { AlertaError } from "../../componentes/Alertas/AlertaError";
import { AlertaExito } from "../../componentes/Alertas/AlertaExito";
import {accederL, accederS} from '../../funciones/Fetch/Acceder/EnviarDatos';
import { useState , useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BorrarToken, NuevoToken } from "../../funciones/Fetch/Acceder/ControlarToken";


export function Acceder(){
    const navigate = useNavigate()
    const {sesionActiva, setSesionActiva} = useContext(Sesion)
    const {alerta,setAlerta, setMensaje} = useContext(Alertas)
    const [acceder, setAcceder] = useState(false) //false = iniciar sesión - true = Registrar
    const [errors, setErrors] = useState({});
    const [login,setLogin] = useState({
        Correo: '',
        Contrasena: '',
        Recordar: false
    })
    //
    const [signIn,setSignIn] = useState({
        Nombre: '',
        Apellido: '',
        Cedula: '',
        Correo: '',
        Contrasena: '',
        ConfirmarContrasena: '',
        AceptarTerminos: false,
        AdminCheck: false,
        AdminClave:'',
    })

    useEffect(()=>{
        BorrarToken()
        setSesionActiva(0)
    })

    //Cambia de un formulario a otro
    const CambiarSesion = () => {
        if (acceder == true) {
            setAcceder(false)
        }else{
            setAcceder(true)
        }
    }
    function validarCorreo(correo) {
        const expresionRegular = /\S+@\S+\.\S+/;
        return expresionRegular.test(correo);
    }

    //Escucha los cambios de cada formulario
    const handleChangeLogin = (e) =>{
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setLogin({
            ...login,
            [e.target.id]:value
        });
    }
    const handleChangeSignIn = (e) =>{
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setSignIn({
            ...signIn,
            [e.target.id]: value
          });
    }

    const handleSubmitLogin = async(e) => {
        e.preventDefault();
        const newError ={};
        console.log(login);
        // Empezamos a mandarlo al server
        try {
        const respuesta = await accederL(login)
        if (respuesta.exito) {
            switch (respuesta.rol) {
                case 'cliente':
                    setSesionActiva(1)
                    break;
                case 'admin':
                setSesionActiva(2)
                    break;
                default:
                    setSesionActiva(0)
                    break;
            }
            navigate('/inicio');
        }
        if (respuesta.error) {
            console.log(respuesta.error,alerta,'si');
            await setMensaje(respuesta.error)
            setAlerta(2)
        }
        if (respuesta.Token && login.Recordar === true) {
            NuevoToken(respuesta.Token)
        }
        } catch (err) {
            
        }
    };

    const handleSubmitSignIn = async(e) => {
        e.preventDefault();
        const newError ={};
        if(!signIn.Nombre) newError.Nombre='Por favor ingresar nombre'
        if(!signIn.Apellido) newError.Apellido='Por favor ingresar apelllido'
        if(!signIn.Cedula) {newError.Cedula='Por favor ingresar numero de cédula'} else if (signIn.Cedula.length < 6){newError.Cedula='Cedulas no validad'}
        if(!signIn.Correo) {newError.Correo='Por favor ingresar correo'}else if (!validarCorreo(signIn.Correo)){newError.Correo='Formato de correo no valido'};
        if(!signIn.Contrasena) newError.Contrasena='Por favor ingresar una contraseña'
        if(!signIn.ConfirmarContrasena) {newError.ConfirmarContrasena='Por favor ingresar una contraseña'} else if (signIn.Contrasena != signIn.ConfirmarContrasena)  {newError.ConfirmarContrasena='Contraseñas no coinciden'};
        if(!signIn.AceptarTerminos) newError.AceptarTerminos='Debes aceptar los términos y condiciones si o si :)'
        if(!signIn.AdminClave && signIn.AdminCheck == true) newError.AdminClave='Ingresa clave admin'

        setErrors(newError);

        if (Object.keys(newError).length !== 0) {
            return
        }

        console.log(signIn);
        try {
        const respuesta = await accederS(signIn)
                if (respuesta.error) {
                    throw respuesta.error
                }
            setAlerta(1)
            setMensaje('Creado exitosamente, ahora inicia sesión')
            setAcceder(false)
        } catch (err) {
            setAlerta(2)
            setMensaje(err)
        }

    };

    return(<>
    {alerta === 1 ?
        <AlertaExito/>
        : alerta === 2 ?
        <AlertaError/>
        : alerta === 3 ?
        <AlertaConfirmar/>
        : null
    }
        <div className=" flex h-full bg-fixed bg-cover bg-parallaxFondo1">
            <div className="flex lg:m-20 w-full xl:m-40 bg-cover bg-FondoDeHotel1 rounded-3xl">
                <div className={`${acceder? '':'translate-x-full'} transition duration-500 ease-2000 flex justify-center h-full items-center w-full`}> 
                    <button variant="primary" onClick={CambiarSesion} className='h-auto p-14 rounded-lg bg-white ' >{acceder ? 'Ya tienes una cuenta? inicia aquí':'No tienes una cuenta? regístrate aquí'}</button>
                </div>
                <div className={` ${acceder? 'rounded-e-3xl':'-translate-x-full rounded-s-3xl'} transition duration-500 pb-4 flex flex-col items-center h-auto w-full bg-blue-300`}>
                    <div className='p-4 flex flex-col items-center h-auto w-full '>
                    <img className='w-1/2' src="/src/assets/Iconos/icono-mo.png" alt="logo" />
                    
                    <p className=" text-5xl">{acceder ? 'Registrarse':'Iniciar sesión'}</p>
                    {acceder ?
                        <Form onSubmit={handleSubmitSignIn} className='w-full pt-5 px-4 min-h-96 flex flex-col'>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="Nombre">
                                <FloatingLabel controlId="Nombre" label="Nombre">
                                    <Form.Control onChange={handleChangeSignIn} isInvalid={errors.Nombre} type="text" />
                                    <Form.Control.Feedback type="invalid">{errors.Nombre}</Form.Control.Feedback>
                                </FloatingLabel>
                                </Form.Group>

                                <Form.Group as={Col} controlId="Apellido">
                                <FloatingLabel controlId="Apellido" label="Apellido">
                                    <Form.Control isInvalid={errors.Apellido} onChange={handleChangeSignIn} type="text" />
                                    <Form.Control.Feedback type="invalid">{errors.Apellido}</Form.Control.Feedback>
                                </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} controlId="Cedula">
                                <FloatingLabel controlId="Cedula" label="Cedula">
                                    <Form.Control isInvalid={errors.Cedula} onChange={handleChangeSignIn} type="number" />
                                    <Form.Control.Feedback type="invalid">{errors.Cedula}</Form.Control.Feedback>
                                </FloatingLabel>
                                </Form.Group>
                            </Row>

                            <Form.Group as={Col} className="mb-3" controlId="Correo">
                                <FloatingLabel controlId="Correo" label="Correo">
                                    <Form.Control isInvalid={errors.Correo} onChange={handleChangeSignIn} type="text" />
                                    <Form.Control.Feedback type="invalid">{errors.Correo}</Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>

                            <Row>
                                <Form.Group as={Col} className="mb-3" controlId="formGridContrasena">
                                    <FloatingLabel controlId="Contrasena" label="Contraseña">
                                        <Form.Control isInvalid={errors.Contrasena} onChange={handleChangeSignIn} type="password" />
                                    <Form.Control.Feedback type="invalid">{errors.Contrasena}</Form.Control.Feedback>
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group as={Col} className="mb-3" controlId="formGridConfirmarContrasena">
                                <FloatingLabel controlId="ConfirmarContrasena" label="Confirmar Contraseña">
                                    <Form.Control isInvalid={errors.ConfirmarContrasena} onChange={handleChangeSignIn} type="password" />
                                    <Form.Control.Feedback type="invalid">{errors.ConfirmarContrasena}</Form.Control.Feedback>
                                </FloatingLabel>
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="AceptarTerminos">
                                <Form.Check onChange={handleChangeSignIn} checked={signIn.AceptarTerminos} isInvalid={errors.AceptarTerminos} label="Aceptar términos y condiciones" />
                                {errors.AceptarTerminos && <div className="invalid-feedback d-block">{errors.AceptarTerminos}</div>}    
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="AdminCheck">
                                <Form.Check onChange={handleChangeSignIn} checked={signIn.AdminCheck} label="Cuenta admin"/>
                                {signIn.AdminCheck ?   <FloatingLabel controlId="AdminClave" label="Clave de Admin">
                                                    <Form.Control onChange={handleChangeSignIn} type="password" isInvalid={errors.AdminClave} />
                                                    <Form.Control.Feedback type="invalid">{errors.AdminClave}</Form.Control.Feedback>
                                                </FloatingLabel>
                                :''}
                            </Form.Group>

                                <Button className="!bg-dark-blueClaro !border-black hover:!bg-dark-blueOscuro active:!transform" type="submit">Registrar cuenta</Button>
                        </Form>: 
                        //login
                        <Form onSubmit={handleSubmitLogin} className='w-full pt-5 px-4 min-h-96 flex flex-col'>
                            <Form.Group className="mb-3" controlId="formGridCorreo">
                                <FloatingLabel controlId='Correo' label='Correo'>
                                    <Form.Control onChange={handleChangeLogin} type='email' placeholder='Correo'/>
                                </FloatingLabel>
                            </Form.Group>
                            
                            <Form.Group className="mb-3" controlId="formGridContrasena">
                                <FloatingLabel controlId='Contrasena' label='Contraseña'>
                                    <Form.Control onChange={handleChangeLogin} type='password' placeholder='Contraseña'/>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="Recordar">
                                <Form.Check onChange={handleChangeLogin} checked={login.Recordar} label='Recordarme' />
                            </Form.Group>
                            
                            <Button className="!bg-dark-blueClaro !border-black hover:!bg-dark-blueOscuro active:!transform" type="submit">Iniciar sesión</Button>
                        </Form>}
                    
                    </div>
                </div>
            </div>
        </div>    
    </>)

}