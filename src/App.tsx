import './App.css'
 import CrearProyectoPage from './page/CreateProyect.js'
import HomePage from './page/HomePage.js'
import LoginPage from './page/Login.jsx'
import RegisterEntityPage from './page/Register.jsx'
import BuscarProyectoPage from './page/SearchProyect.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={< LoginPage/>} />
        <Route path="/buscarproyecto" element={<BuscarProyectoPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/?" element={<RegisterEntityPage />}/>
          <Route path='/crearproyecto' element={<CrearProyectoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
