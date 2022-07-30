import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewHome from './views/ViewHome';
import IniciarSesion from './views/IniciarSesion';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewHome />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
