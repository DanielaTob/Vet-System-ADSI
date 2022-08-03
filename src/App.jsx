import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewHome from './views/ViewHome';
import IniciarSesion from './views/IniciarSesion';
import Registro from './views/Registro';
import Dashboard from './views/Dashboard';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewHome />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
