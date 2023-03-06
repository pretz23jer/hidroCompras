import React, { Component } from "react";
import Menu from '../Layouts/Menu';
import Footer from "../Layouts/Footer";
import Imggeneral from '../Resources/acerca.jpg';

class Demo extends Component{
    render() {
        return(
            <div className="estiloPagina">
                <Menu />
                <img src={Imggeneral} className="img-fluid" alt="Imagen General"/>
                <div className="container-fluid text-center">
                    <p className="marcasEstilo"></p>
                    <div className="text-center padreLineaAzul">
                        <div className="lineaAzul"></div>
                    </div>
                </div>
                <div className="fondoCelesteDemo">
                    <div className="text-white text-center">
                        <p className="fw-bold fs-1 h1">Solicita ti Demo</p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Demo;