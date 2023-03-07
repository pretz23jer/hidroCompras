import React, { Component } from "react";
import Menu from '../Layouts/Menu';
import Footer from "../Layouts/Footer";
import Imggeneral from '../Resources/acerca.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AudioMp3 from '../Resources/clic.mp3';

class Afiliados extends Component{
    render() {
        AOS.init();

        return(
            <div className="estiloPagina">
                <Menu />
                <img src={Imggeneral} className="img-fluid" alt="Imagen General"/>
                <div className="container-fluid text-center">
                    <div className="text-center padreLineaAzul">
                    <div className="pt-2" data-aos="fade-down">
                        <div className="container pb-4">
                            <h2 className="py-3 my-2 tituloAcerca">¿Qué hacen nuestros afiliados?</h2>
                            <div className="text-start lineaAzulSobre mb-4"></div>
                            <div className="row">
                                <div className="col-12 col-md-4 col-lg-4 mt-2 " >
                                    <div className="card tarjetasAcerca">
                                        <div className="card-body">
                                            <p className="text-center letraObjeti">VISITAN A SUS PROPIOS CLIENTES</p>
                                            <p>Tú te quedas con tus propios clientes, incluso nosotros te brindaremos oportunidades de conectar con más clientes nuevos que necesiten de tus servicios.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 col-lg-4 mt-2 " >
                                    <div className="card tarjetasAcerca">
                                        <div className="card-body">
                                            <p className="text-center letraObjeti">ASESORAN BIEN A SUS CLIENTES</p>
                                            <p>Ya que detectaste el problema hidráulico que tiene, brinda la solución hidráulica con nuestra tienda en línea y nuestra app HIDROCOMPRAS y gana comisiones con los mismos equipos que instalas.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 col-lg-4 mt-2" >
                                    <div className="card tarjetasAcerca">
                                        <div className="card-body">
                                            <p className="text-center letraObjeti">REFIEREN LOS EQUIPOS QUE INSTALAN</p>
                                            <p>Nosotros haremos todo, facturamos al NIT que el cliente pida, entregamos en la dirección que el cliente indique (aplica restricciones) tú instalas y ganas.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6 mt-2" >
                                    <div className="card acercaTexto">
                                        <div className="card-body">
                                            <p className="text-center letraObjeti">REVISAN SU BILLETERA DIGITAL</p>
                                            <p>Si a tu instalación le sirve cualquiera de nuestros productos para ganar comisión, haz la venta con nuestra app y podrás monitorear cuánto vas ganando por cada venta que hagas con nosotros, a finalizar cada mes, lo que tengas acumulado en comisión puedes reclamarlo en efectivo, Gift Cards de Supermercados o adquirir cualquiera de los productos de nuestra tienda en línea.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6 mt-2" >
                                    <div className="card acercaTexto">
                                        <div className="card-body">
                                            <p className="text-center letraObjeti">SE CAPACITAN Y CERTIFICAN</p>
                                            <p>Si tus habilidades son LIMITADAS, no te preocupes, contamos con PROFESIONALES EN CADA CATEGORÍA que impartirán capacitaciones programadas de forma presencial y virtual para que vayas adquiriendo mayor conocimiento y así puedas atender a más clientes y no perder instalaciones que pueden transformarse en más comisiones para ti.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Afiliados;