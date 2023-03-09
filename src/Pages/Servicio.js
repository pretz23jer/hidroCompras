import React, { Component } from "react";
<<<<<<< HEAD
import Menu from '../Layouts/Menu';
import Footer from "../Layouts/Footer";
import ServiciosHidro from "../Components/ServiciosHidro";
=======
import Menu from '../Layout/Menu';
import Footer from "../Layout/Footer";
import fondoMarcas from "../components/img/servicio.jpg"
import ServiciosHidro from "../components/ServiciosHidro";
>>>>>>> 4ef920d8a9a6f9378591e2f0e1ea4aec7fd59df4

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