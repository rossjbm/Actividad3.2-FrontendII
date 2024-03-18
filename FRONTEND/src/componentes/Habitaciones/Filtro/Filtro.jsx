import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'; // Puedes usar la biblioteca React Bootstrap Modal

import { IoCloseOutline } from "react-icons/io5";

import ModoOscuro from '../../Globales/Modo Oscuro/ModoOscuro';

const FiltroModal = () => {
  const [showModal, setShowModal] = useState(false); // Definimos showModal como un estado

  const [numPersonas, setNumPersonas] = useState(1);
  const [fechaLlegada, setFechaLlegada] = useState('');
  const [fechaSalida, setFechaSalida] = useState('');

  const handleFiltrarClick = () => {
    setShowModal(true);
  };

  const handleNumPersonasClick = (num) => {
    setNumPersonas(num);
  };

  const handleFechaLlegadaChange = (e) => {
    setFechaLlegada(e.target.value);
  };

  const handleFechaSalidaChange = (e) => {
    setFechaSalida(e.target.value);
  };

  const handleFiltrar = () => {
    console.log('Filtrando habitaciones...');
    setShowModal(false); // Cierra el modal después de filtrar
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <ModoOscuro>
        {(isDarkMode) => (
          <>
            <Button onClick={handleFiltrarClick} className={`w-1/2 h-14 md:w-2/6 mb-4 d-block mx-auto font-textos font-bold ${isDarkMode ? `text-white` : `text-black`}`} style={ isDarkMode ? { backgroundColor: '#04293a', borderColor: '#04293a', borderRadius: '0' } : { backgroundColor: '#5ecde0', borderColor: '#000', borderRadius: '0' }}>
              Filtra por
            </Button>
      
            <Modal show={showModal} onHide={handleModalClose} backdrop="static" centered data-bs-theme={isDarkMode ? "dark" : "light"} className={`bg-gray-400`}>
              <Modal.Header className={`${isDarkMode ? `bg-dark-greenMedio` : `bg-white`}`}>
                <button className='absolute top-5 right-7' onClick={(e)=>{e.preventDefault(),handleModalClose()}}><IoCloseOutline className={`text-4xl ${isDarkMode ? `text-white` : `text-black`}`} /></button>
                <Modal.Title className={`font-textos w-100 text-center ${isDarkMode ? `text-white` : `text-black`}`} >Filtrar habitaciones</Modal.Title>
              </Modal.Header>
              <Modal.Body className={`font-textos ${isDarkMode ? `text-white bg-dark-greenMedio` : `text-black bg-white`}`}>
                <div className="text-center mb-4">
                  <Form.Group controlId="numPersonas">
                    <Form.Label>Número de personas</Form.Label>
                    <div className="d-flex justify-content-center gap-3">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <Button key={num} variant={numPersonas === num ? 'primary' : 'outline-dark'} onClick={() => handleNumPersonasClick(num)} style={ isDarkMode ? { backgroundColor: '#1f6e8c', borderColor: '#1f6e8c', borderRadius: '0' } : { backgroundColor: '#5ecde0', borderColor: '#000', borderRadius: '0' }}>
                          {num}
                        </Button>
                      ))}
                    </div>
                  </Form.Group>
                </div>
                <h5 className="text-center mb-3 font-textos">Disponibilidad</h5>
                <div className="d-flex justify-content-center flex-wrap gap-3 font-textos">
                  <Form.Group controlId="fechaLlegada" className="text-center">
                    <Form.Label>Fecha de llegada</Form.Label>
                    <Form.Control type="date" value={fechaLlegada} onChange={handleFechaLlegadaChange} className={`${isDarkMode ? `bg-dark-blueClaro border-dark-blueClaro focus:bg-dark-greenOscuro` : `text-black border-black focus:bg-blue-200`}`} />
                  </Form.Group>
                  <Form.Group controlId="fechaSalida" className="text-center">
                    <Form.Label>Fecha de salida</Form.Label>
                    <Form.Control type="date" value={fechaSalida} onChange={handleFechaSalidaChange} className={`${isDarkMode ? `bg-dark-blueClaro border-dark-blueClaro focus:bg-dark-greenOscuro` : `text-black border-black focus:bg-blue-200`}`} />
                  </Form.Group>
                </div>
              </Modal.Body>
              <Modal.Footer className={`justify-content-center ${isDarkMode ? `bg-dark-greenMedio` : `bg-white`}`}>
                <Button variant="primary" onClick={handleFiltrar} className={`px-5 font-textos ${isDarkMode ? `text-black` : `text-white`}`} style={ isDarkMode ? { backgroundColor: '#fff', borderColor: '#fff', borderRadius: '0', color: '000' } : { backgroundColor: '#000', borderColor: '#000', borderRadius: '0', color: 'fff' }}>
                  Filtrar
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        )}
      </ModoOscuro>
    </>
  );
};

export default FiltroModal;

