
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RecibirClima } from './Fetch';
import { CodigoClima } from './CodigoCLima';

export function Clima() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [currentHour, setCurrentHour] = useState(new Date().getHours());
    const [temperaturaActual, setTemperaturaActual] = useState([])
    const [humedadActual, setHumedadActual] = useState([])
    const [tiempoActual, setTiempoActual] = useState([])
    const [codigoDeClimaActual, setCodigoDeClimaActual] = useState([])
    const [vientoActual, setVientoActual] = useState([])

    async function infoClima(filtro, hora) {
        console.log(filtro, hora,'qqq');
        try {
            var resultado = await RecibirClima()
        } catch (error) {
            console.error(error);
        }
        console.log(resultado);

        if (typeof filtro !== 'undefined' && typeof hora !== 'undefined') {
            console.log('re1');
            console.log(resultado.hourly[filtro][hora]);
            return(resultado.hourly[filtro][hora])

        }else if (typeof filtro !== 'undefined') {
            console.log('re2');
            console.log(resultado.hourly[filtro]);
            return(resultado.hourly[filtro])

        }else{
            console.log('re3');
            return(resultado.hourly)
        }

    }

    useEffect(()=>{
        async function climaActual() {
            setTemperaturaActual(await infoClima('temperature_2m'))
            setHumedadActual(await infoClima('relative_humidity_2m'))
            setTiempoActual(await infoClima('time'))
            setCodigoDeClimaActual(await infoClima('weather_code'))
            setVientoActual(await infoClima('wind_speed_10m'))
        }
        climaActual()
        
    },[show])
    
    return (
        <>
        <div className='fixed top-1/4 -right-1'>
            <button onClick={handleShow} className="border-solid border-2 border-green-100 bg-gradient-to-br from-white to-blue-200 rounded-l-3xl ">
                <CodigoClima codigo={codigoDeClimaActual[currentHour]} time={tiempoActual[currentHour]} />
                <p className='relative bottom-3 '>{temperaturaActual[currentHour]}°C</p>
            </button>
        </div>
        <Offcanvas  show={show} onHide={handleClose} placement={'end'}>
            <Offcanvas.Header>
                <button className='absolute top-5 right-7' onClick={(e)=>{e.preventDefault(),handleClose()}}><IoIosCloseCircleOutline className='text-4xl' /></button>
            <Offcanvas.Title className='w-full p-3 bg-gradient-to-br from-white to-blue-200 '><p className='font-titulos'>Clima en el hotel</p>
                <CodigoClima codigo={codigoDeClimaActual[currentHour]} time={tiempoActual[currentHour]}/>
                <p className='font-textos'>Temperatura: {temperaturaActual[currentHour]}°C</p>
                <p className='font-textos'>Humedad: {humedadActual[currentHour]}%</p>
                <p className='font-textos'>Viento: {vientoActual[currentHour]}km/h</p>
                <p className='font-textos'>Ultima información extraída a las {currentHour.toString().padStart(2, '0')}:00</p>
            </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className='flex flex-col items-center w-full'>
                    
                    <p className='text-xl mb-2 font-titulos'>Clima de hoy</p>
                    {tiempoActual.map((hora, index)=>(
                        <div className={`${currentHour == (new Date(hora)).getHours() ? 'bg-blue-200':'bg-blue-300'} relative p-2 flex w-full justify-around border-solid border-t-2 border-green-100 font-textos`}>
                            <p className='absolute left-2'>{hora = ((new Date(hora)).getHours()).toString().padStart(2, '0')}:00</p>
                            <CodigoClima codigo={codigoDeClimaActual[index]} time={tiempoActual[index]}/>
                            <div>
                                <p>Temperatura: {temperaturaActual[index]}°C</p>
                                <p>Humedad: {humedadActual[index]}%</p>
                                <p>Viento: {vientoActual[index]}km/h</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Offcanvas.Body>
        </Offcanvas>
        </>
    );
}