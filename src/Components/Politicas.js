import React, { Component } from "react";
import Menu from '../Layouts/Menu';
import Footer from "../Layouts/Footer";
import Imggeneral from '../Resources/acerca.jpg';

class Politicas extends Component{
    render() {
        return(
            <div className="estiloPagina">
                <Menu />
                <img src={Imggeneral} className="img-fluid" alt="Imagen Hidro" />
                <div className="container-fluid text-center">
                    <div className="text-center padreLineaAzul">
                        <div className="lineaAzul"></div>
                    </div>
                </div>
                <div className="fondoCelesteDemo">
                    <div className="text-white text-center">
                        <p className="fw-bold fs-1 h1 pt-3 pb-3">Nuestras Políticas <br /> &#128526;</p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Politicas;