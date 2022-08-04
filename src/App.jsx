import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewHome from './views/ViewHome';
import IniciarSesion from './views/IniciarSesion';
import Registro from './views/Registro';
import Dashboard from './views/Dashboard';
import FichaPaciente from './views/FichaPaciente';
import NuevaConsulta from './views/NuevaConsulta';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewHome />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ficha-paciente" element={<FichaPaciente />} />
        <Route path="/nueva-consulta" element={<NuevaConsulta />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
