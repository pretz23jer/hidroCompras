import React, { Component } from "react";
import Menu from '../Layout/Menu';
import Footer from "../Layout/Footer";
import fondoMarcas from "../components/img/servicio.jpg"
import ServiciosHidro from "../components/ServiciosHidro";

class Servicio extends Component{
    render() {
        return(
            <div>
                <Menu />
                <ServiciosHidro />
                <Footer />
            </div>
        )
    }
}

export default Servicio;