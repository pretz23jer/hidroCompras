import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import 'aos/dist/aos.css';
import Inicio from '../Pages/Inicio';
import Productos from "../Pages/Productos";
import Contacto from "../Pages/Contacto";
import Servicio from "../Pages/Servicio";
import Socio from "../Pages/Socio";

import Login from "../Pages/Sesion/Login";
import Restaurar from "../Pages/Sesion/Restaurar";

import Acerca from '../Pages/Acerca';
import Afiliados from "../Enlaces/Afiliados";
import Ayuda from "../Enlaces/Ayuda";
import Demo from "../Enlaces/Demo";
import Politicas from "../Enlaces/Politicas";
import Preguntas from "../Enlaces/Preguntas";
import Soporte from "../Enlaces/Soporte";
import Unirte from "../Enlaces/Unirte";

const AppRouters = () =>{
    return (
        <Router>
          <Routes>
            <Route exact path="/" element={<Inicio />} />
            <Route exact path="/producto" element={<Productos />} />
            <Route exact path="/servicio" element={<Servicio />} />
            <Route exact path="/socio" element={<Socio />} />
            <Route exact path="/contactar" element={<Contacto />} />

            <Route exact path="/auth/login" element={<Login />} />
            <Route exact path="/auth/restaurar" element={<Restaurar />} />

            <Route exact path="/acerca" element={<Acerca />} />
            <Route exact path="/afiliado" element={<Afiliados />} />
            <Route exact path="/ayuda" element={<Ayuda />} />
            <Route exact path="/demo" element={<Demo />} />
            <Route exact path="/politica" element={<Politicas />} />
            <Route exact path="/pregunta" element={<Preguntas />} />
            <Route exact path="/soporte" element={<Soporte />} />
            <Route exact path="/unirte" element={<Unirte />} />
          </Routes>
        </Router>
    );
}

export default AppRouters