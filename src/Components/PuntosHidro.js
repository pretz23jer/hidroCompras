import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';

import Banner from "../Resources/baner4.jpg";
import Banner2 from "../Resources/baner5.jpg";

import Ilustracion1 from '../Resources/ilustracion.png';
import Ilustracion2 from '../Resources/ilustracion2.png';
import Ilustracion3 from '../Resources/ilustracion3.png';

import PlayStore from '../Resources/googleplay.png';
import AppStore from '../Resources/appstore.png';

import Iphone from '../Resources/iphone.png';
import Vector from '../Resources/vector.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

class PuntosHidro extends Component{
    render() {
        let CambiarBanner = Banner;
        let Condicion = 'block';

        function cambiar(x) {
            if (x.matches) { // If media query matches
                CambiarBanner = Banner2;
                Condicion = 'none';
            } else {
                CambiarBanner = Banner;
                Condicion = 'block';
            }
          }
          
          var x = window.matchMedia("(max-width: 992px)")
          cambiar(x)
          x.addListener(cambiar)

          AOS.init();
        return(
            <>
                <Carousel>
                    <Carousel.Item>
                        <img src={CambiarBanner} className="img-fluid" alt="Imagen Hidro" />
                        <Carousel.Caption>
                            <div className="row">
                                <div className="col-12 col-lg-8">
                                    <p className="ajustarTextoBanerPuntos">AHORA PUEDES GANAR PUNTOS REFIRIENDO TUS MARCAS FAVORITA.</p>
                                    <p className="ajustarTextoBanerPuntos2">CON EL CODIGO QR DE LA FACTURA Y CELULAR INGRESA LOS DATOS A NUESTRA APP.</p>
                                    <a className="btn btn-lg btn-warning h3 fw-bold" href="https://play.google.com/store/games?hl=es" target="_blank">&nbsp;&nbsp;Descarga la App&nbsp;&nbsp;</a>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={CambiarBanner} className="img-fluid" alt="Imagen Hidro" />
                        <Carousel.Caption>
                            <div className="row">
                                <div className="col-12 col-lg-8">
                                    <p className="ajustarTextoBanerPuntos">AHORA PUEDES GANAR PUNTOS REFIRIENDO TUS MARCAS FAVORITA.</p>
                                    <p className="ajustarTextoBanerPuntos2">CON EL CODIGO QR DE LA FACTURA Y CELULAR INGRESA LOS DATOS A NUESTRA APP.</p>
                                    <a className="btn btn-lg btn-warning h3 fw-bold" href="https://play.google.com/store/games?hl=es" target="_blank">&nbsp;&nbsp;Descarga la App&nbsp;&nbsp;</a>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={CambiarBanner} className="img-fluid" alt="Imagen Hidro"/>
                        <Carousel.Caption>
                            <div className="row">
                                <div className="col-12 col-lg-8">
                                    <p className="ajustarTextoBanerPuntos">AHORA PUEDES GANAR PUNTOS REFIRIENDO TUS MARCAS FAVORITA.</p>
                                    <p className="ajustarTextoBanerPuntos2">CON EL CODIGO QR DE LA FACTURA Y CELULAR INGRESA LOS DATOS A NUESTRA APP.</p>
                                    <a className="btn btn-lg btn-warning h3 fw-bold" href="https://play.google.com/store/games?hl=es" target="_blank">&nbsp;&nbsp;Descarga la App&nbsp;&nbsp;</a>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className="container text-center pt-4">
                <p className="fs-1 fw-bold">¿Cómo funciona Hidrocompras?</p>
                    <div className="row">
                        <div className="col-12 col-lg-4" data-aos="fade-down">
                            <div className="p-4">
                                <img src={Ilustracion3} className="img-fluid" alt="Imagen Hidro" />
                                <p className="fs-3 fw-bold">Descarga la App</p>
                                <p className="fs-5">Regístrate una sola vez en cualquiera de las marcas que representamos o descarga nuestra App en Play Store o App Store.</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4" data-aos="fade-down">
                            <div className="p-4">
                                <img src={Ilustracion1} className="img-fluid" alt="Imagen Hidro" />
                                <p className="fs-3 fw-bold">Acumula Puntos</p>
                                <p className="fs-5">Al referir los productos que instalas, estos te dan una comisión y a la vez ganas puntos, los puedes revisar en tu Wallet Digital</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4" data-aos="fade-down">
                            <div className="p-4">
                                <img src={Ilustracion2} className="img-fluid" alt="Imagen Hidro" />
                                <p className="fs-3 fw-bold">Reclama tus premios</p>
                                <p className="fs-5">Mensualmente recibirás tu comisión de los equipos que referiste, allí mismo controlaras tus puntos y así podrás canjearlos.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fondoColorCeleste pt-5 mt-5 pb-5" data-aos="fade-down">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-6" data-aos="fade-down">
                                <div className="espacioApp">
                                    <p className="fs-2 text-center">Descarga la app</p>
                                    <div className="d-flex justify-content-center pb-5" data-aos="fade-down">
                                        <div className="p-1 m-1">
                                            <a href="#" rel="noreferrer" rel="noreferrer">
                                                <img src={PlayStore} height="50" alt="Imagen Hidro" />
                                            </a>
                                        </div>
                                        <div className="p-1 m-1" >
                                            <a href="#" rel="noreferrer" rel="noreferrer">
                                                <img src={AppStore} height="50" alt="Imagen Hidro" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <img src={Iphone} className="altura-Img" alt="Imagen Hidro" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fondoBeigeDos pt-5" data-aos="fade-down">
                    <p className="fs-2 fst-normal text-center pt-5 pb-5 text-black" data-aos="fade-down">#HidrocomprasTePremia, <strong>de verdad</strong></p>
                    <div className="container pb-5">
                        <div className="row mb-5">
                            <div className="col-12 col-lg-3" style={{ display: Condicion }}>
                                <p className="fw-bold fs-3 mt-5 pt-5">Una App, Comisiones y Puntos</p>
                                <p className="h5 fw-lighter">Ganas comisiones y puntos con nuestra App, los limites te los pones tu, entre mas nos refieras y vendas con la App, más comisiones y puntos ganas.</p>
                                <br />
                                <br />
                                <p className="fw-bold fs-3">Billetera Digital</p>
                                <p className="h5 fw-lighter">Todas tus comisiones se acumulan en tu billetera digital personal, revisa también los puntos que se acumulan con cada venta y así ganas doble.</p>
                            </div>
                            <div className="col-12 col-lg-1" style={{ display: Condicion }} data-aos="fade-down">
                                <div className="pt-5 mt-5">
                                    <br /><br /><br />
                                    <img  src={Vector} className="img-fluid" alt="Imagen Hidro" />
                                </div>
                                <div className="pt-5 mt-5">
                                    <br /><br /><br /><br /><br /><br /><br /><br />
                                    <img  src={Vector} className="img-fluid" alt="Imagen Hidro" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 text-center">
                                <img src={Iphone} className="img-fluid" alt="Imagen Hidro" />
                            </div>
                            <div className="col-12 col-lg-1" style={{ display: Condicion }} data-aos="fade-down">
                                <div className="pt-5 mt-5">
                                    <br /><br /><br />
                                    <img  src={Vector} className="img-fluid" alt="Imagen Hidro" />
                                </div>
                                <div className="pt-5 mt-5">
                                    <br /><br /><br /><br /><br /><br /><br /><br />
                                    <img  src={Vector} className="img-fluid" alt="Imagen Hidro" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-3 text-end" style={{ display: Condicion }} data-aos="fade-down">
                                <p className="fw-bold fs-3 pt-5 mt-5">En la palma de tu mano</p>
                                <p className="h5 fw-lighter">Encuentra los productos mas solicitados del sector residencial e industrial en un solo lugar, no tienes que salir a buscarlo, nosotros llegamos a ti.</p>
                                <br />
                                <br />
                                <p className="fw-bold fs-3 mt-5 pt-5">Ahorra tiempo y recursos</p>
                                <p className="h5 fw-lighter">HIDROCOMPRAS te lleva el producto a donde tu cliente lo indique, tanto el cliente como tu no gastan nada, recibes, instalas y ganas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default PuntosHidro;