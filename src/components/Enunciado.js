import React, { Component } from "react";
import click from './img/clic.png';
import Video from './img/Pool2.mp4';

class Enunciado extends Component{
    render() {
        return(
            <div className="espacio">
                <div className="container estiloEnunciado">
                    <div className="row">
                        <div className="col textoenfrenteVideo">
                            <p className="enunciaTexto">En un solo Clic <img src={click} width="50" /></p>
                            <p className="enunciadoTextoDos">Comprar en línea nunca fue tan sencillo</p>
                            <p className="enunciadoTextTres">En Hidrocompras</p>
                            <br />
                             <div className="d-flex centrarContenido">
                                <a  href="https://wa.me/50230656786?text=Hola" target="_blank" className="whatss">
                                <i className="fa fa-whatsapp moldear"></i>
                                </a><p className="espaciarTexto">¡Escríbenos para ayudarlo!</p>
                             </div>
                        </div>
                        <div className="col videomostrado">
                            <div className='player-wrapper'>
                                <video autoplay='true' muted={true} className='react-player' loop src={Video} width="100%" ></video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Enunciado;