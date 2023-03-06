import React, { Component } from "react";
import Menu from '../Layouts/Menu';
import Footer from "../Layouts/Footer";
import ServiciosHidro from "../Components/ServiciosHidro";

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