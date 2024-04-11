import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/home'
import Personas from "./pages/personas";
import Municipios from "./pages/municipios";
import Viviendas from "./pages/viviendas";
import Planteamiento from "./pages/planteamiento";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/personas' element={<Personas />} />
          <Route path='/municipios' element={<Municipios />} />
          <Route path='/viviendas' element={<Viviendas />} />
          <Route path='/planteamiento' element={<Planteamiento />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
