import React from 'react';
import { Spinner } from 'react-bootstrap';

import ModoOscuro from '../Modo Oscuro/ModoOscuro';

const Loader = () => {
  return (
    <ModoOscuro>
      {(isDarkMode) => (
        <div className="z-20 d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <div className="text-center">
            <Spinner animation="border" variant={isDarkMode ? "light" : "dark"} role="status" className={`w-14 h-14`} />
            <p className={`mt-3 text-lg font-textos font-bold ${isDarkMode ? `text-white` : `text-black`}`}>Cargando...</p>
          </div>
        </div>
      )}
    </ModoOscuro>
  );
};

export default Loader;



