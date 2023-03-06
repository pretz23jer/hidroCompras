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
            <Footer />
        </div>
    )
}

export default Inicio