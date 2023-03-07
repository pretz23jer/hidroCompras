import React, { Component } from "react";
import Menu from '../Layouts/Menu';
import Footer from "../Layouts/Footer";
import Imggeneral from '../Resources/baner1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
class Unirte extends Component{
    render() {
        AOS.init();
        return(
            <div className="estiloPagina">
                <Menu />
                <img src={Imggeneral} className="img-fluid" alt="Imagen General" />
                <div className="container-fluid text-center">
                    <p className="marcasEstilo"></p>
                    <div className="text-center padreLineaAzul">
                        <div className="lineaAzul"></div>
                        <div className="fondoAcerca" data-aos="fade-up">
                            <div className="container my-4 py-4 ">
                                <h2 className="pt-3 mt-2 tituloAcerca">¿Quieres unirte?</h2>
                                <div className="text-start lineaAzulSobre mb-4"></div>
                                <p className="">¡Estamos trabajando para revolucionar la manera en que las personas hacen sus compras hidráulicas!</p>
                                <p className="fw-bold">Buscamos Plomeros que quieran aumentar sus ingresos haciendo lo mismo que hacen todos los días, asesorar a sus propios clientes y usar la APP de HIDROCOMPRAS como herramienta de venta para así ganar comisión de lo que recomiendan e instalan, que quieran capacitarse y certificarse para ampliar o completar tu conocimiento en el área hidráulica.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fondoCelesteDemo" data-aos="fade-up">
                    <div className="text-white text-center">
                        <p className="fw-bold fs-1 h1 pt-3 pb-3">No dudes más <br /> Únete a Hidrocompras </p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Unirte;