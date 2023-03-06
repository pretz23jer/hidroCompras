import React, { Component } from "react";
import Menu from '../Layouts/Menu';
import Footer from "../Layouts/Footer";
import Imggeneral from '../Resources/acerca.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Ayuda extends Component{
    render() {
        AOS.init();
        return(
            <div>
                <Menu />
                <img src={Imggeneral} className="img-fluid" alt="Imagen General" />
                <div className="container-fluid text-center" data-aos="fade-down">
                    <div className="text-center padreLineaAzul">
                        <div className="lineaAzul"></div>
                    </div>
                </div>
                <div className="fondoCelesteDemo" data-aos="fade-down">
                    <div className="text-white text-center">
                        <p className="fw-bold fs-1 h1 pt-3 pb-3">¿Necesitas ayuda? <br /> Comunicate con nosotros </p>
                    </div>
                </div>
                <div className="bg-black pt-4 pb-5" data-aos="fade-down">
                    <div className="text-white text-center">
                        <p className="fw-bold fs-1 h1 pt-5 pb-5">SOMOS HIDROCOMPRAS </p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Ayuda