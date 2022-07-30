import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewHome from './views/ViewHome';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewHome />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
