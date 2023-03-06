import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Baner3 from '../Resources/baner3.png';
import Baner31 from '../Resources/baner31.png';
import Logo from '../Resources/hlogo.png';
import CirculoMoneda from '../Resources/circulo3.png';
import CirculoCasa from '../Resources/circulo2.png';
import CirculoAlcanci from '../Resources/circulo1.png';
import Marca1 from '../Resources/AFT.png';
import Marca2 from '../Resources/AQUAPRO.png';
import Marca3 from '../Resources/BERKELEY.png';
import Marca4 from '../Resources/starite.png';
import Marca5 from '../Resources/TITAN.png';
import Marca6 from '../Resources/FRANKLIN-ELECTRIC.png';
import Marca7 from '../Resources/ESPA.png';
import Marca8 from '../Resources/GLOBAL-WATER-SOLUTION-2-1.png';
import Marca9 from '../Resources/SOMET.png';
import Marca10 from '../Resources/MYERS.png';
import Marca11 from '../Resources/Sin-titulo-1-1.png';
import Marca12 from '../Resources/PENTAIR.png';
import PlayStore from '../Resources/googleplay.png';
import AppStore from '../Resources/appstore.png';
import Iphone from '../Resources/iphone2.png';
import Empresa1 from '../Resources/empresa1.png';
import Empresa2 from '../Resources/empresa2.png';
import Empresa3 from '../Resources/empresa3.png';
import Empresa4 from '../Resources/empresa4.png';
import Empresa5 from '../Resources/empresa5.png';
import Empresa6 from '../Resources/empresa6.png';
import Empresa7 from '../Resources/empresa7.png';
import Empresa8 from '../Resources/empresa8.png';
import Empresa9 from '../Resources/empresa9.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Monedas extends Component{
    render() {
        AOS.init();
        let longImg = '100';

        function cambiar(x) {
            if (x.matches) { // If media query matches
                longImg = '75';
            } else {
                longImg = '100';
            }
          }
          
          var x = window.matchMedia("(max-width: 600px)")
          cambiar(x) // Call listener function at run time
          x.addListener(cambiar) // Attach listener function on state changes
        return(
            <div>
                <Carousel>
                    <Carousel.Item interval={4000}>
                        <img className="d-block w-100" src={Baner3} alt="First slide" alt="Imagen Hidro"/>
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <img className="d-block w-100"  src={Baner31} alt="Second slide"  alt="Imagen Hidro"/>
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                    <img className="d-block w-100"  src={Baner3} alt="Third slide" alt="Imagen Hidro" />
                    </Carousel.Item>
                </Carousel>
                <div className="fondoBeigeDos pt-5 pb-5" data-aos="fade-down">
                    <div className="container mt-4">
                        <p className="h1 monedaTexto">¿Qué son los HIDROPUNTOS  _____________________________</p>
                        <p className="h4 pt-4 pb-4">HIDROPUNTOS<img src={Logo} height="40" alt="Imagen Hidro" /></p>
                        <div className="row mb-5 pb-5">
                            <div className="col-12 col-md-4" data-aos="fade-down">
                                <div className="estiloTarjetaMonedas">
                                    <img src={CirculoMoneda} height="200" alt="Imagen Hidro" />
                                    <p className="h3 text-center fw-bold text-white mb-3 mt-3">Gana Hidro Ficha</p>
                                    <p className="text-center text-white h5 lh-base">¡Al comprar tus químicos o accesorios para tu piscina de cualquier marca ganas HIDRO-FICHAS!.</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-4" data-aos="fade-down">
                                <div className="estiloTarjetaMonedas2">
                                    <img src={CirculoCasa} height="200" alt="Imagen Hidro" />
                                    <p className="h3 text-center fw-bold text-white mb-3 mt-3">Úsalos en la red</p>
                                    <p className="text-center text-white h5 lh-base">Con tus HIDRO-FICHAS puedes comprar los productos que representamos.</p><br />
                                </div>
                            </div>
                            <div className="col-12 col-md-4" data-aos="fade-down">
                                <div className="estiloTarjetaMonedas">
                                    <img src={CirculoAlcanci} height="200" alt="Imagen Hidro" />
                                    <p className="h3 text-center fw-bold text-white mb-3 mt-3">Ahorra dinero</p>
                                    <p className="text-center text-white h5 lh-base">Con las HIDRO-FICHAS podrás disfrutar de promociones exclusivas y descuentos especiales.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container pt-4 pb-4" data-aos="fade-down">
                        <p className="h2 fw-bold">¿Cómo ganar HIDRO-FICHAS? __________________________________</p>
                        <p className="h4 mt-4 pt-3 pb-5 mb-5">Al comprar tus químicos y/o accesorios para tu piscina ganas HIDRO-FICHAS y estas son las marcas que participan, recuerda que son como efectivo que puedes usar para comprar cualquier producto que representamos.</p>
                        <div className="cajaGris">
                            <div className="row">
                                <div className="col-12 col-lg-4 mb-1" data-aos="fade-down">
                                    <div className="CajaCompras">
                                        <div className="row pb-4">
                                            <div className="col-4 CajaComprasHijo" data-aos="fade-down">
                                                <img className="fondoCajaHidro" src={Empresa1} height={longImg} alt="Imagen Hidro" />
                                            </div>
                                            <div className="col-4 CajaComprasHijo" data-aos="fade-down">
                                                <img className="fondoCajaHidro" src={Empresa2} height={longImg} alt="Imagen Hidro1" />
                                            </div>
                                            <div className="col-4 CajaComprasHijo" data-aos="fade-down">
                                                <img className="fondoCajaHidro" src={Empresa3} height={longImg} alt="Imagen Hidro2" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4 mb-1" data-aos="fade-down">
                                    <div className="CajaCompras">
                                        <div className="row pb-4">
                                            <div className="col-4 CajaComprasHijo" data-aos="fade-down">
                                                <img className="fondoCajaHidro" src={Empresa4} height={longImg} alt="Imagen Hidro" />
                                            </div>
                                            <div className="col-4 CajaComprasHijo" data-aos="fade-down">
                                                <img className="fondoCajaHidro" src={Empresa5} height={longImg} alt="Imagen Hidro" />
                                            </div>
                                            <div className="col-4 CajaComprasHijo" data-aos="fade-down">
                                                <img className="fondoCajaHidro" src={Empresa6} height={longImg} alt="Imagen Hidro" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4 mb-1" data-aos="fade-down">
                                    <div className="CajaCompras">
                                        <div className="row pb-4">
                                            <div className="col-4 CajaComprasHijo" data-aos="fade-down">
                                                <img className="fondoCajaHidro" src={Empresa7} height={longImg} alt="Imagen Hidro" />
                                            </div>
                                            <div className="col-4 CajaComprasHijo" data-aos="fade-down">
                                                <img className="fondoCajaHidro" src={Empresa8} height={longImg} alt="Imagen Hidro" />
                                            </div>
                                            <div className="col-4 CajaComprasHijo" data-aos="fade-down">
                                                <img className="fondoCajaHidro" src={Empresa9} height={longImg} alt="Imagen Hidro" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container pt-5 mt-2 pb-4" data-aos="fade-down">
                        <p className="h2 fw-bold mt-5 pt-3">¿Dónde usar mis HIDRO-FICHAS? __________________________________</p>
                        <p className="h4 mt-4 pt-3 pb-5 mb-5"> Úsalos como efectivo en más de 20 marcas de productos de Hidrocompras al momento de adquirirlas.</p>
                        <br />
                        <div className="row">
                            <div className="col-6 col-lg-2" data-aos="fade-down">
                                <div className="cajaCircular">
                                    <img src={Marca1} className="img-fluid" alt="Imagen Hidro" />
                                </div>
                            </div>
                            <div className="col-6 col-lg-2" data-aos="fade-down">
                                <div className="cajaCircular">
                                    <img src={Marca2} className="img-fluid" alt="Imagen Hidro" />
                                </div>
                            </div>
                            <div className="col-6 col-lg-2" data-aos="fade-down">
                                <div className="cajaCircular">
                                    <img src={Marca3} className="img-fluid"  alt="Imagen Hidro"/>
                                </div>
                            </div>
                            <div className="col-6 col-lg-2" data-aos="fade-down">
                                <div className="cajaCircular">
                                    <img src={Marca4} className="img-fluid"  alt="Imagen Hidro"/>
                                </div>
                            </div>
                            <div className="col-6 col-lg-2" data-aos="fade-down">
                                <div className="cajaCircular">
                                    <img src={Marca5} className="img-fluid" alt="Imagen Hidro" />
                                </div>
                            </div>
                            <div className="col-6 col-lg-2" data-aos="fade-down">
                                <div className="cajaCircular">
                                    <img src={Marca6} className="img-fluid" alt="Imagen Hidro" />
                                </div>
                            </div>
                        </div> 
                        <div className="row pt-3" data-aos="fade-down">
                            <div className="col-6 col-lg-2" data-aos="fade-down">
                                <div className="cajaCircular">
                                    <img src={Marca7} className="img-fluid" alt="Imagen Hidro" />
                                </div>
                            </div>
                            <div className="col-6 col-lg-2" data-aos="fade-down">
                                <div className="cajaCircular">
                                    <img src={Marca8} className="img-fluid" alt="Imagen Hidro" />
                                </div>
                            </div>
                            <div className="col-6 col-lg-2" data-aos="fade-down">
                                <div className="cajaCircular">
                                    <img src={Marca9} className="img-fluid" alt="Imagen Hidro" />
                                </div>
                            </div>
                            <div className="col-6 col-lg-2" data-aos="fade-down">
                                <div className="cajaCircular">
                                    <img src={Marca10} className="img-fluid" alt="Imagen Hidro" />
                                </div>
                            </div>
                            <div className="col-6 col-lg-2" data-aos="fade-down">
                                <div className="cajaCircular">
                                    <img src={Marca11} className="img-fluid" alt="Imagen Hidro" />
                                </div>
                            </div>
                            <div className="col-6 col-lg-2" data-aos="fade-down">
                                <div className="cajaCircular">
                                    <img src={Marca12} className="img-fluid" alt="Imagen Hidro" />
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
                                            <div className="p-1 m-1" data-aos="fade-down">
                                                <a href="#" rel="noreferrer" rel="noreferrer">
                                                    <img src={PlayStore} height="50" alt="Imagen Hidro" />
                                                </a>
                                            </div>
                                            <div className="p-1 m-1" data-aos="fade-down">
                                                <a href="#" rel="noreferrer" rel="noreferrer">
                                                    <img src={AppStore} height="50" alt="Imagen Hidro" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6" data-aos="fade-down">
                                    <img src={Iphone} className="altura-Img" alt="Imagen Hidro" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Monedas;