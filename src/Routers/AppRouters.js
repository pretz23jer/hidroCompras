import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Inicio from "../Pages/Inicio";
import Productos from "../Pages/Productos";
import Contacto from "../Pages/Contacto";
import Servicio from "../Pages/Servicio";
import Socio from "../Pages/Socio";
import Acerca from '../Pages/Acerca';
import Afiliados from "../Components/Afiliados";
import Ayuda from "../Components/Ayuda";
import Demo from "../Components/Demo";
import Politicas from "../Components/Politicas";
import Preguntas from "../Pages/Preguntas";
import Soporte from "../Components/Soporte";
import Unirte from "../Components/Unirte";

import Coins from "../Pages/Coins";
import Puntos from "../Pages/Puntos";
import Actualizar from "../Pages/Actualizar";
import Empresa from "../Pages/Empresa";

function AppRouters() {
    return(
        <Router>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route exact path="/producto" element={<Productos />} />
            <Route exact path="/servicio" element={<Servicio />} />
            <Route exact path="/socio" element={<Socio />} />
            <Route exact path="/contactar" element={<Contacto />} />

            <Route exact path="/acerca" element={<Acerca />} />
            <Route exact path="/afiliado" element={<Afiliados />} />
            <Route exact path="/ayuda" element={<Ayuda />} />
            <Route exact path="/demo" element={<Demo />} />
            <Route exact path="/politica" element={<Politicas />} />
            <Route exact path="/pregunta" element={<Preguntas />} />
            <Route exact path="/soporte" element={<Soporte />} />
            <Route exact path="/unirte" element={<Unirte />} />

            <Route exact path="/coins" element={<Coins />} />
            <Route exact path="/puntos" element={<Puntos />} />
            <Route exact path="/actualizar" element={<Actualizar />} />
            <Route exact path="/empresa" element={<Empresa />} />
          </Routes>
        </Router>
    )
}

export default AppRouters;