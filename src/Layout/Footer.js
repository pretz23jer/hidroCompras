import React, { Component } from "react";
import imagenPlay from './Img/playstore.png';
import hidro3 from './Img/hidrob.png';

class Footer extends Component{
    render() {
        return(
            <div className="pie">
               <div className="container-fluid">
                    <div className="row justify-content-center g-2">
                        <div className="col-12 col-sm-6 col-md-3 enlaceText">
                            <a href="/ayuda" className=""><p className="titulopie">Déjanos ayudarte</p></a>
                            <a href="/demo" className=""><p>Solicitar demo</p></a>
                            <a href="/unirte" className=""><p>Unirte a Hidrocompras</p></a>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 enlaceText">
                            <a className="fw-bold" href="/soporte"><p className="titulopie">Soporte</p></a>
                            <a href="/pregunta"><p>Preguntas Frecuentes</p></a>
                            <a href="/politica"><p>Políticas de privacidad</p></a>
                            <a href="/afiliado"><p>Que hacen los afiliados</p></a>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 enlaceText"><p className="titulopie">Acerca de Nosotros</p>
                            <a href="/acerca"><p>Sobre Hidrocompras</p></a>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <p className="titulopie">Síguenos en</p>
                            <div className="iconos-redes-sociales d-flex align-items-center justify-content-center">
                                    <a href="https://wa.me/50230656786" target="_blank">
                                        <i className="fa fa-phone"></i>
                                    </a>
                                    <a href="https://www.facebook.com/hidrocompras" target="_blank">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    <a href="https://www.instagram.com/hidrocompras/" target="_blank">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                    <a  href="https://wa.me/50230656786?text=Hola,%20le%20comento%20que%20me%20interesó%20el%20producto%20:%20" target="_blank">
                                        <i className="fa fa-whatsapp"></i>
                                    </a>
                                </div>
                                <p className="titulopie">Descargar la app</p>
                                <a href="https://play.google.com/store/games?hl=es" target="_blank"><img src={imagenPlay} width='150' /></a>
                                <div className="ajusteing mt-3">
                                    <div>
                                        <img src={hidro3} width='50' />
                                    </div>
                                    <div className="sepataTexto">
                                        <p className="">Cloudit4 &copy; 2023</p>
                                        <p className="textoPieDerecho">Todos los derechos reservados</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Footer;