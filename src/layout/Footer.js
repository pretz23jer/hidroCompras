import React, { Component } from "react";
import imagenPlay from './Img/playstore.png';
import hidro3 from './Img/hidrob.png';

class Footer extends Component{
    render() {
        return(
            <div className="pie">
               <div className="container-fluid">
                    <div className="row justify-content-center g-2">
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="ajusteing">
                                <div>
                                    <img src={hidro3} width='50' />
                                </div>
                                <div className="sepataTexto">
                                    <p className="">Cloudit4 &copy; 2023</p>
                                    <p className="textoPieDerecho">Todos los derechos reservados</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 enlaceText"><p className="titulopie">Soporte</p>
                            <a href="#"><p>Preguntas frecuentes</p></a>
                            <a href="#"><p>Ayuda y contacto</p></a>
                            <a href="#"><p>Política de privacidad</p></a>
                            <a href="#"><p>Términos y condiciones</p></a>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 enlaceText"><p className="titulopie">Acerca de Nosotros</p>
                            <a href="#"><p>Sobre Hidrocompras</p></a>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3"><p className="titulopie">Síguenos en</p>
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
                            <br />
                            <p className="titulopie">Descargar la app</p>
                            <img src={imagenPlay} width='150' />
                        </div>
                    </div>
               </div>
            </div>
        )
    }
}

export default Footer;