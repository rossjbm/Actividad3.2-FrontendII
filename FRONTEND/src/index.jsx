import React from 'react'
import ReactDOM from 'react-dom/client'


// COMPONENTES
import { App } from './App';

// ESTILOS
import './index.css'

// REACT ROUTER
import { BrowserRouter} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
)
