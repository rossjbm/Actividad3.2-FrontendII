import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'; // Puedes usar la biblioteca React Bootstrap Modal

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
    // Aquí puedes implementar la lógica para filtrar las habitaciones según los criterios seleccionados
    // Por ejemplo, puedes usar los valores de numPersonas, fechaLlegada y fechaSalida para filtrar las habitaciones
    console.log('Filtrando habitaciones...');
    setShowModal(false); // Cierra el modal después de filtrar
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button variant="primary" onClick={handleFiltrarClick} className="mb-4 d-block mx-auto" style={{ backgroundColor: '#ccc', borderColor: '#ccc' }}>
        Filtrar por
      </Button>

      <Modal show={showModal} onHide={handleModalClose} backdrop="static" centered>
        <Modal.Header closeButton>
          <Modal.Title className="w-100 text-center" style={{ color: '#333', marginBottom: '0' }}>Filtrar habitaciones</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center mb-4">
            <Form.Group controlId="numPersonas">
              <Form.Label>Número de personas</Form.Label>
              <div className="d-flex justify-content-center gap-3">
                {[1, 2, 3, 4, 5].map((num) => (
                  <Button key={num} variant={numPersonas === num ? 'primary' : 'outline-secondary'} onClick={() => handleNumPersonasClick(num)} style={{ backgroundColor: '#ccc', borderColor: '#ccc' }}>
                    {num}
                  </Button>
                ))}
              </div>
            </Form.Group>
          </div>
          <h5 className="text-center mb-3" style={{ color: '#333' }}>Disponibilidad</h5>
          <div className="d-flex justify-content-center flex-wrap gap-3">
            <Form.Group controlId="fechaLlegada" className="text-center">
              <Form.Label>Fecha de llegada</Form.Label>
              <Form.Control type="date" value={fechaLlegada} onChange={handleFechaLlegadaChange} />
            </Form.Group>
            <Form.Group controlId="fechaSalida" className="text-center">
              <Form.Label>Fecha de salida</Form.Label>
              <Form.Control type="date" value={fechaSalida} onChange={handleFechaSalidaChange} />
            </Form.Group>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="primary" onClick={handleFiltrar} style={{ backgroundColor: '#ccc', borderColor: '#ccc' }}>
            Filtrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FiltroModal;

