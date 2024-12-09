// import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import { Home, About_us, Proyectos} from "./views"

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sobre-nosotros" element={<About_us/>} />
          <Route path="/proyectos" element={<Proyectos/>} />
      </Routes>
    </>
  );
}

export default App;