import React, { Component } from "react";
import Contactar from "../Resources/contactar2.png";

class ContactoHidro extends Component{
    render() {
        return(
            <div className="estiloPagina">
                <div className="container text-center mb-5 pb-4">
                    <p className="marcasEstilo">Contáctanos</p>
                    <div className="text-center padreLineaAzul">
                        <div className="lineaAzul"></div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img src={Contactar} className="img-fluid" alt="Imagen General"/>
                        </div>
                        <div className="col-12 col-md-6">
                            <p className="mt-4 pt-2">Escribenos en nuestras redes sociales y con gusto te atenderemos</p>
                            <div className="hola">
                                <div className="redesSociales d-flex align-items-center justify-content-center">
                                        <a href="https://wa.me/50230656786" target="_blank" rel="noreferrer">
                                            <i className="fa fa-phone"></i>
                                        </a>
                                        <a href="https://www.facebook.com/messages/t/326261960767880" target="_blank" rel="noreferrer">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                        <a href="https://www.instagram.com/hidrocompras/" target="_blank" rel="noreferrer">
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                        <a  href="https://wa.me/50230656786?text=Hola,%20le%20comento%20que%20me%20interesó%20el%20producto%20:%20" target="_blank" rel="noreferrer">
                                            <i className="fa fa-whatsapp"></i>
                                        </a>
                                    </div>
                            </div>
                            <p className="pt-4 mat-2">Para más información comunicate al número:</p>
                            <p className="fw-bold text-dark"><i className="fa fa-phone"></i> +502 3065 6786</p>
                        </div> 
                        <div className="mt-5">
                            <p className="fw-bold text-primary">Úbiquenos</p>
                            <div  className="table-responsive">
                                <div className="col-12 estiloMapa">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20863.69342798437!2d-90.51691918731638!3d14.631981286324795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2sgt!4v1676307968576!5m2!1ses-419!2sgt"></iframe>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactoHidro;