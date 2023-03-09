import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
<<<<<<< HEAD

import Inicio from "../Pages/Inicio";
=======
import 'aos/dist/aos.css';
import Inicio from '../Pages/Inicio';
>>>>>>> 4ef920d8a9a6f9378591e2f0e1ea4aec7fd59df4
import Productos from "../Pages/Productos";
import Contacto from "../Pages/Contacto";
import Servicio from "../Pages/Servicio";
import Socio from "../Pages/Socio";
<<<<<<< HEAD
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
=======

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
>>>>>>> 4ef920d8a9a6f9378591e2f0e1ea4aec7fd59df4
            <Route exact path="/producto" element={<Productos />} />
            <Route exact path="/servicio" element={<Servicio />} />
            <Route exact path="/socio" element={<Socio />} />
            <Route exact path="/contactar" element={<Contacto />} />

<<<<<<< HEAD
=======
            <Route exact path="/auth/login" element={<Login />} />
            <Route exact path="/auth/restaurar" element={<Restaurar />} />

>>>>>>> 4ef920d8a9a6f9378591e2f0e1ea4aec7fd59df4
            <Route exact path="/acerca" element={<Acerca />} />
            <Route exact path="/afiliado" element={<Afiliados />} />
            <Route exact path="/ayuda" element={<Ayuda />} />
            <Route exact path="/demo" element={<Demo />} />
            <Route exact path="/politica" element={<Politicas />} />
            <Route exact path="/pregunta" element={<Preguntas />} />
            <Route exact path="/soporte" element={<Soporte />} />
            <Route exact path="/unirte" element={<Unirte />} />
<<<<<<< HEAD

            <Route exact path="/coins" element={<Coins />} />
            <Route exact path="/puntos" element={<Puntos />} />
            <Route exact path="/actualizar" element={<Actualizar />} />
            <Route exact path="/empresa" element={<Empresa />} />
          </Routes>
        </Router>
    )
}

export default AppRouters;
=======
          </Routes>
        </Router>
    );
}

export default AppRouters
>>>>>>> 4ef920d8a9a6f9378591e2f0e1ea4aec7fd59df4
