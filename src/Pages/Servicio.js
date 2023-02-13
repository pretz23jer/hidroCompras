import React, { Component } from "react";
import Menu from '../Layout/Menu';
import Footer from "../Layout/Footer";
import fondoMarcas from "../components/img/servicio.jpg"

class Servicio extends Component{
    render() {
        return(
            <div className="estiloPagina">
                <Menu />
                <div className="">
                        <img src={fondoMarcas} className="img-fluid" />
                </div>
                <div className="container-fluid text-center mt-3">
                    <p className="marcasEstilo">Sección Servicio</p>
                    <div className="text-center padreLineaAzul">
                        <div className="lineaAzul"></div>
                    </div>
                    
                </div>
                <Footer />
            </div>
        )
    }
}

export default Servicio;