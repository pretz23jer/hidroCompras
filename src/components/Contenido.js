import React, { Component } from "react";
import asesor from './img/asesor.png';
import casco from './img/casco.ico';
import envio from './img/envio.ico';
import motor from './img/motor.ico';
import seguri from './img/seguridad.ico';
import descuento from './img/descuento.ico';
import telefono from './img/telefono.ico';
import reloj from './img/reloj.ico';
import anuncio from './img/anuncio.jpg';
import click from './img/verde.ico';
import bombas from './img/p6.png';
import depositos from './img/purifica.png';
import calentadores from './img/calentador.png';

class Contenido extends Component{
    render() {
        return(
            <div className="espacio">
                <div className="container estiloEnunciado">
                    <p className="text-center textoPicina">TODO LO QUE NECESITAS PARA <br /> TODO TIPO DE PISCINAS </p>
                    <p className="text-center">BOMBAS, MOTORES, CALENTADORES, ACCESORIOS</p>
                    <div className="lineaRoja"></div>
                </div>
                <div className="container">
                    <div className="row textoCotizaEspa">
                        <div className="col-12 col-md-6 col-lg-6">
                            <p className="cotizaTexto">Productos de alta calidad,<br /> eficiencia  y garantía</p>
                            <div className="d-flex">
                                <img src={casco} height="35" /><p className="ajusteTexto">Contamos con <strong>asesoría técnica</strong>  en implementación de nuestro productos adquiridos</p>
                            </div>
                            <div className="d-flex">
                                <img src={motor} height="35" /><p className="ajusteTexto"><strong>Marcas reconocidas</strong> en motores internaciones</p>
                            </div>
                            <div className="d-flex">
                                <img src={seguri} height="35" /><p className="ajusteTexto">Compras <strong>seguras</strong> y fiables en todos nuestros productos, así tambien garantía por desperfecto de fábrica</p>
                            </div>
                            <div className="d-flex">
                                <img src={descuento} height="35" /><p className="ajusteTexto"><strong>Descuentos</strong> especiales a nuestros clientes</p>
                            </div>
                            <div className="d-flex">
                                <img src={envio} height="35" /><p className="ajusteTexto"><strong>Envíos</strong> a todo el país, trabajando con las empresas de paquetería y envíos: <strong>FORZA, CARGO EXPRESO</strong> y <strong>GUATEX</strong></p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <img src={asesor} height="350" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="container segmentoDos">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <img src={anuncio} height="200" className="img-fluid" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <p className="cotizaTexto">Desde tu hogar puedes ver <br /> nuestros productos, realizar <br /> compras y mucho mas...</p>
                            <div className="d-flex">
                                <img src={telefono} height="30" /><p className="ajusteTexto">Puedes visitarnos por medio de tu <strong>Smarthphone</strong>  o computadora</p>
                            </div>
                            <div className="d-flex">
                                <img src={reloj} height="30" /><p className="ajusteTexto">Nuestro sitio disponible las <strong>24 /7 </strong> los 365 días</p>
                            </div>
                            <div className="d-flex">
                                <i className="fa fa-facebook fa-lg"></i><p className="ajusteTexto">Contamos con nuestras <strong>Redes Sociales</strong> para que nos sigues y te puedas comunicar con nosotros</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bombaAgua">
                    <p className="contactar text-center" >Adquiere tus productos</p>
                    <p className="text-center text-light">¡Recuerde que con <strong>Hidrocompras</strong> encuentras todos los productos referentes a piscinas </p>
                    <p className="text-center text-light">Cotiza en un solo clic <img src={click} width="50" /> </p>
                </div>
                <div className="container concatacnos">
                    <p className="cotizaTexto text-center">Productos para el Hogar</p><br/><br/>
                    <div className="text-center">
                        <img src={bombas} height="250"  /><img src={calentadores} height="250"  /><img src={depositos} height="250"  />
                        <br/><br/>
                        <p className="text-center fw-bold">BOMBAS | CALENTADORES | FILTROS</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contenido;