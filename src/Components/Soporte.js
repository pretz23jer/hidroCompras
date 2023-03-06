import React, { Component } from "react";

import Menu from '../Layouts/Menu';
import Footer from "../Layouts/Footer";
import Imggeneral from '../Resources/acerca.jpg';

class Soporte extends Component{
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
                <div className="bg-black pt-4 pb-5">
                    <div className="text-white text-center">
                        <p className="fw-bold fs-1 h1 pt-5 pb-5">Soporte Técnico </p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Soporte;