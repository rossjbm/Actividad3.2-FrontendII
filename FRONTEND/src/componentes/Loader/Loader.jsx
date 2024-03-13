import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="text-center">
        <Spinner animation="border" variant="primary" role="status" style={{ width: '4rem', height: '4rem' }} />
        <p className="mt-3">Cargando...</p>
      </div>
    </div>
  );
};

export default Loader;



