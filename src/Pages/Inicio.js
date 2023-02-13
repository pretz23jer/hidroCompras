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
            <Footer />
        </div>
    )
}

export default Inicio