import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/paginas/Login'
import Registro from './components/paginas/Registro'
import CreacionOrden from './components/paginas/CreacionOrden'
import ActualizacionOrden from './components/paginas/ActualizacionOrden'
import TablaEnvios from './components/paginas/TablaEnvios'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
         <Router>
        <Routes>
        <Route path="/" element={<App/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/registro" element={<Registro/>}></Route>
          <Route path="/creacion" element={<CreacionOrden/>}></Route>
          <Route path="/actualizacion" element={<ActualizacionOrden/>}></Route>
          <Route path="/envios" element={<TablaEnvios/>}></Route>
        </Routes>
      </Router>
  </React.StrictMode>
)
