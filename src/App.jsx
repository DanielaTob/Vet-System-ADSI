import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewHome from './views/ViewHome';
import IniciarSesion from './views/IniciarSesion';
import Registro from './views/Registro';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewHome />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
