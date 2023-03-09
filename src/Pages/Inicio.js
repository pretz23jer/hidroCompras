<<<<<<< HEAD
import React, { Component } from "react";

import Boton from '../Layouts/Boton';
import Menu from '../Layouts/Menu';
import Footer from "../Layouts/Footer";
import Home from "../Components/Inicio";

import 'aos/dist/aos.css';
import AOS from 'aos';

function Inicio(){
    AOS.init();
    return (
        <div>
            <Menu />
            <Home />
            <Boton />
=======
import React from "react";
import Enunciado from '../components/Enunciado';
import Contenido from '../components/Contenido';
import Marcas from '../components/Marcas';
import Boton from '../Layout/Boton';
import Menu from '../Layout/Menu';
import Footer from "../Layout/Footer";

function Inicio(){
    return (
        <div>
            <Menu />
            <Boton />
            <Enunciado />
            <Marcas />
            <Contenido />
>>>>>>> 4ef920d8a9a6f9378591e2f0e1ea4aec7fd59df4
            <Footer />
        </div>
    )
}

export default Inicio