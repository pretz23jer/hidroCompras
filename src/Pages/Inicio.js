import React from "react";
import Enunciado from '../components/Enunciado';
import Contenido from '../components/Contenido';
import Marcas from '../components/Marcas';
import Boton from '../Layout/Boton';

function Inicio(){
    return (
        <div>
            <Boton />
            <Enunciado />
            <Marcas />
            <Contenido />
        </div>
    )
}

export default Inicio