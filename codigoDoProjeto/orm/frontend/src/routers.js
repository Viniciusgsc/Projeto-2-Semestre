import React from "react";
import Geral from "./components/Geral/Geral.js"
import Pacientes from "./components/Pacientes/Pacientes.js"

import { Route, Routes } from "react-router-dom"

function Routers() {
    return (
        <Routes>
            <Route exact path="/" element={<Geral />} />
            <Route exact path="/pacientes" element={<Pacientes />} />
        </Routes>
    )
}

export default Routers

