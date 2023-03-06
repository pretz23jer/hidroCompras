import React, { Component } from "react";
import ImgApp2 from '../Resources/banerg.png';
import ImgApp1 from '../Resources/banerg1.png';
import ImgApp3 from '../Resources/banerg2.png';
import ImgApp4 from '../Resources/banergm1.png';
import ImgApp5 from '../Resources/banergm3.png';
import App1 from '../Resources/app2.png';
import App2 from '../Resources/app1.png';
import App3 from '../Resources/app3.png';
import Logo from '../Resources/hidroa.png';
import Marca1 from '../Resources/marca1.png';
import Marca2 from '../Resources/marca2.png';
import Marca3 from '../Resources/marca3.png';
import Marca4 from '../Resources/marca4.png';
import Marca5 from '../Resources/marca5.png';
import Marca6 from '../Resources/marca6.png';
import Phone from '../Resources/phone.png';
import Persona from '../Resources/persona.png';
import Persona2 from '../Resources/persona2.png';
import Persona3 from '../Resources/persona3.png';
import Celular from '../Resources/celular2.png';
import Celular2 from '../Resources/celular3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import imganeTelefono from '../Resources/celular.png';

class Home extends Component{
    render() {
        
        AOS.init();
        let cambiarImg1 = ImgApp1;
        let cambiarImg3 = ImgApp2;
        let cambiarImg2 = ImgApp3;

        let accion = "block";
        
        if (window.matchMedia('only screen and (max-width: 600px)').matches) {
            cambiarImg1 = ImgApp4;
            cambiarImg2 = ImgApp5;
            cambiarImg3 = ImgApp4
            accion = "none";
        } else {
            cambiarImg1 = ImgApp1;
            cambiarImg2 = ImgApp3;
            cambiarImg3 = ImgApp2;
            accion = "block";
        }

        let Accion = 'block';
        let AccionDos = 'none';

        function comportamiento(){
            document.getElementById('botonContinuar').style.display=AccionDos;
            document.getElementById('botonOcultar').style.display=Accion;
        }

        function ocultarTexto(){
            document.getElementById('botonContinuar').style.display=Accion;
            document.getElementById('botonContinuar').style.paddingTop='5px';
            document.getElementById('botonContinuar').style.paddingBottom='17px';
            document.getElementById('botonOcultar').style.display=AccionDos;
        }

        return(
            <div>
                <div className="container-fluid espacioTarjeta" data-aos="fade-down">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="cajaPadre">
                                    <img src={cambiarImg2}  className="d-block w-100" alt='Imágen Hidrocompras' />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="cajaPadre">
                                    <img src={cambiarImg1}  className="d-block w-100" alt='Imágen Hidrocompras' />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="cajaPadre">
                                    <img src={cambiarImg3}  className="d-block w-100" alt='Imágen Hidrocompras' />
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="formaBoton" aria-hidden="true"><i className="fa fa-arrow-left"></i></span>
                            <span className="visually-hidden ">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="formaBoton" aria-hidden="true"><i className="fa fa-arrow-right" ></i></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="fondoAzulHidro">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-8 pt-5">
                                <p className="todasApps">Todos los equipos hidráulicos  <br /> que instalas en una sola APP</p>
                                <p className="fw-fold todasApps">HIDROCOMPRAS</p>
                                <p className="fw-bold text-black acumulaTexto">Aumentas tus ingresos, acumulas puntos y ganas increíbles premios.</p>
                                <a className="btn btn-sm colorBoton animarBotonDescargar" href="https://play.google.com/store/apps/" target="_blank"  rel="noopener noreferrer">&nbsp;&nbsp;&nbsp;&nbsp;Descarga Hidrocompras&nbsp;&nbsp;&nbsp;&nbsp;</a>
                            </div>
                            <div className="col-12 col-lg-4">
                                <img className="img-fluid" src={imganeTelefono} />
                            </div>
                        </div>
                       
                    </div>
                </div>
                <div  className="container pt-4 centarContenido mt-4" data-aos="flip-up">
                    <div className="barraCeleste text-black fw-bold text-center">
                        <div className="espacioEntre">¿Cómo funciona?</div>
                    </div>
                </div>
                <div className="container pt-5" data-aos="flip-down">
                    <div className="row">
                        <div className="col-12 col-md-4 p-5 text-center" data-aos="fade-down">
                            <img src={App1} className="img-fluid" alt="Imagen Hidro" />

                            <p className="fw-bold text-black h5">Descarga la App en tu celular</p>
                            <p>Regístrate una sola vez, haz click en cualquiera de las marcas que representamos o desde la <strong>App</strong></p>
                        </div>
                        <div className="col-md-4 p-5 text-center" style={{display: accion }} data-aos="fade-down">
                            <img src={App3} className="img-fluid" alt="Imagen Hidro" />
                            <p className="fw-bold text-black h5">Aprovecha todos tus Clientes</p>
                            <p>Cuando se te presente la oportunidad de reparar o instalar un equipo hidráulico de los que están en nuestro catalogo, véndelo o cómpralo con la APP<strong> HIDROCOMPRAS</strong> ¡y así ganas!</p>
                        </div>
                        <div className="col-md-4 p-5 text-center" style={{display: accion }} data-aos="fade-down">
                            <img src={App2} className="img-fluid" alt="Imagen Hidro" />
                            <p className="fw-bold text-black h5">Reclama tus premios</p>
                            <p>En tu billetera digital se sumaran todas tus comisiones y allí veras también cuantos puntos llevas acumulados, los puntos serán cambiados por tarjetas de regalo.</p>
                        </div>
                    </div>
                    <div className="text-center pb-5">
                        <div className="d-flex text-center justify-content-center">
                            <div className="justify-content-center p-1">
                                <a href="https://play.google.com/store/apps/" target="_blank" className="btn btn-md btn-dark fw-bold animarBotonDescargar" rel="noreferrer" >&nbsp;&nbsp;Descargar HidroCliente&nbsp;&nbsp;</a>
                            </div>
                            <div className="p-1 justify-content-center">
                                <a href="https://play.google.com/store/apps/" target="_blank" className="btn btn-md btn-dark fw-bold animarBotonDescargar" rel="noreferrer" >&nbsp;&nbsp;Descargar HidroTécnico&nbsp;&nbsp;</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div  className="container centarContenido mt-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <div className="barraCeleste text-black fw-bold text-center">
                        <div className="espacioEntre">Productos Hidrocompras</div>
                    </div>
                </div>
                <div className="container text-center" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <p className="h5 pt-4 mt-4">VENDES / REFIERES, INSTALAS Y GANAS CON HIDROCOMRPAS</p>
                    <div className="row pt-5 mt-4">
                        <div className="col-12 col-lg-3">
                            <div className="izquiTar tarjetaProducto" data-aos="fade-down">
                                <img src={Logo} width="50" alt="Imagen Hidro" />
                                <p className="fw-bold h6 pt-3 pb-3">INSTALACIONES</p><br />
                                <p>Todos los productos que conoces e intalas te hacen ganar más dinero y acumular puntos</p><br/>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
                            <div className="izquiTar tarjetaProducto" data-aos="fade-down">
                                <img src={Logo} width="50" alt="Imagen Hidro" />
                                <p className="fw-bold h6 pt-3 pb-3">LISTA DE MATERIALES</p><br />
                                <p>Ahora los materiales que necesitas para tus instalaciones también suman en tu billetera digital.</p><br/>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
                            <div className="izquiTar tarjetaProducto" data-aos="fade-down">
                                <img src={Logo} width="50" alt="Imagen Hidro" />
                                <p className="fw-bold h6 pt-3 pb-3">REPRACIONES DE EQUIPOS <br />(TALLER)</p>
                                <p>Todas las reparaciones de calentadores, bombas, purificadores y tanques, ganas también una comisión con nuestro Taller </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
                            <div className="dereTar tarjetaProducto " data-aos="fade-down">
                                <img src={Logo} width="50" alt="Imagen Hidro" />
                                <p className="fw-bold h6 pt-3 pb-3">ASISTENCIAS HIDRÁULICAS</p>
                                <p>Con una cuota mensual podemos programarte tus servicios preventivos y si el equipo llegara a ya no funcionar mas, lo cambiamos de inmediato.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center pt-5 mt-2 pb-5" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    <a href="https://play.google.com/store/apps/" target="_blank"  rel="noopener noreferrer" className="btn btn-md btn-dark fw-bold animarBotonDescargar">
                    &nbsp;&nbsp;Descargar Hidrocompras&nbsp;&nbsp;
                    </a>
                </div>
                <div className="fondoBeige" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    <div className=" pt-5">
                        <div  className="container centarContenido mt-4">
                            <div className="barraCeleste2 text-black fw-bold text-center">
                                <div className="espacioEntre2">CON HIDROCOMPRAS GANAS CON TUS MARCAS FAVORITAS</div>
                            </div>
                        </div>
                    </div>
                    <div className="container text-center pt-2 pb-5 mb-5" data-aos="fade-up" data-aos-anchor-placement="top-center">
                        <p className="pt-3 pb-5 h5">Conoce todas las marcas que te ayudan a ganar más dinero, te reconocen y premian porque eres el protagonista que brinda las soluciones a tus clientes. </p>
                        <div className="row" data-aos="flip-left">
                            <div className="col-4 col-sm-2 p-4" data-aos="flip-left">
                                <img src={Marca1} className="img-fluid" alt="Imagen Hidro" />
                            </div>
                            <div className="col-4 col-sm-2 p-4" data-aos="flip-left">
                                <img src={Marca2} className="img-fluid" alt="Imagen Hidro" />
                            </div>
                            <div className="col-4 col-sm-2 p-4" data-aos="flip-left">
                                <img src={Marca3} className="img-fluid" alt="Imagen Hidro" />
                            </div>
                            <div className="col-4 col-sm-2 p-4" data-aos="flip-left">
                                <img src={Marca4} className="img-fluid" alt="Imagen Hidro" />
                            </div>
                            <div className="col-4 col-sm-2 p-4" data-aos="flip-left">
                                <img src={Marca5} className="img-fluid" alt="Imagen Hidro" />
                            </div>
                            <div className="col-4 col-sm-2 p-5" data-aos="flip-left">
                                <img src={Marca6} className="img-fluid" alt="Imagen Hidro" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-5 mt-5">
                    <div  className="container centarContenido mt-4">
                        <div className="barraCeleste text-black fw-bold text-center">
                            <div className="espacioEntre">HIDRO-PUNTOS</div>
                        </div>
                    </div>
                </div>
                <div className="container text-center mb-5 pb-5">
                    <p className="mt-4 h5">Gana mas dinero usando Hidrocompras</p>
                    <div className="row pt-2 mt-4">
                        <div className="col-12 col-sm-6 pt-5 mt-5" data-aos="flip-down">
                            <div className="modificarEspacio pb-5">
                                <p className="h3 pt-5">Por primera vez no solo ganas por instalar, ganas usando hidrocompras.</p>
                                <p className="h5 pt-4 mb-5">Somos la primera App para Plomeros y Técnicos que quieren ganar más.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6" data-aos="fade-down">
                            <img src={Phone} className="img-fluid" alt="Imagen Hidro"/>
                        </div>
                    </div>
                </div>
                <div className="fondoBeige" data-aos="fade-up">
                    <div className="pt-5">
                        <div  className="container centarContenido mt-4">
                            <div className="barraCeleste text-black fw-bold text-center">
                                <div className="espacioEntre">CON HIDROCOMPRAS TIENES....</div>
                            </div>
                        </div>
                    </div>
                    <div className="container pt-5 pb-5  mb-5">
                        <div className="row mt-2 pt-3">
                            <div className="col-12 col-md-3" data-aos="flip-up">
                                <div className="tarjetaTiene">
                                    <p className="textoGrande fw-bold">+ DE 35 MARCAS</p>
                                    <p className="h5 pt-3  text-center">Para ganar dinero con Hidrocompras</p>
                                    <br />
                                    <p className="pb-3"></p>
                                </div>
                            </div>
                            <div className="col-12 col-md-3" data-aos="flip-up">
                                <div className="tarjetaTiene">
                                    <p className="textoGrande fw-bold">+ DE 2 MIL </p>
                                    <p className="h5 pt-3 text-center">Afiliados como tu estan ganando dinero con Hidrocompras</p>
                                    <p className="pb-4"></p>
                                </div>
                            </div>
                            <div className="col-12 col-md-3">
                                <div className="tarjetaTiene" data-aos="flip-up">
                                    <p className="textoGrande fw-bold">+ DE Q.1500.00</p>
                                    <p className="h5 pt-3 text-center">Como ingreso extra <strong>atendiendo</strong> / <strong>refiriendo</strong> al menos 10 productos al mes</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-3">
                                <div className="tarjetaTiene" data-aos="flip-up">
                                    <p className="textoGrande fw-bold">+ DE 300 PRODUCTOS</p>
                                    <p className="h5 pt-3 text-center">Te ayudaran a incrementar tus ingresos</p><br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-4" data-aos="fade-down">
                    <div  className="container centarContenido mt-4">
                        <div className="barraCeleste2 text-black fw-bold text-center">
                            <div className="espacioEntre2">LO QUE NUESTROS AFILIADOS Y CLIENTES PIENSAN DE HIDROCOMPRAS</div>
                        </div>
                    </div>
                </div>
                <div className="container mt-4 pb-5">
                    <div className="row pt-4 pb-2">
                        <div className="col-12 col-md-4" data-aos="flip-up">
                            <div className="disenoTarje text-center">
                                <img src={Persona} width="140" alt="Imagen Hidro" />
                                <p className="fw-bold h4">Olga Leticia Gómez Vignola - Cliente</p>
                                <p className="p-2">Quedamos muy satisfechos con el trato inmediato y gentil, recibido por parte de ustedes; satisfechos ampliamemnte con el hidroneumático y el switch adquirido con ustedes para la bomba de la cisterna, agradecemos la entrega a domicilio y ha sido un gusto tratar con ustedes.<br />¡Muchas gracias!</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4" data-aos="flip-up">
                            <div className="disenoTarje text-center">
                                <img src={Persona2} width="140" alt="Imagen Hidro"/>
                                <p className="fw-bold h4">Gabriela Baeza - Alquifiestas DELUX</p>
                                <p className="p-2">Recomiendo mucho a esta empresa, es super fácil realizar la compra en linea y te llevan el producto hasta tu casa, me ahorran gasolina y tiempo y me puedo dedicar a otras cosas mientras vienen, los recomiendo muy puntuales y cumplidos con lo que ofrecen.</p><br />
                            </div>
                        </div>
                        <div className="col-12 col-md-4" data-aos="flip-up">
                            <div className="disenoTarje  text-center">
                                <img src={Persona3} width="140" alt="Imagen Hidro" />
                                <p className="fw-bold h4">Axel Mayen - Tecnico Plomero Afiliado</p>
                                <p className="p-2">Soy técnico - plomero domiciliar para el área de la capital e interior de Guatemala, desde hace tiempo estaba buscando la forma de incrementar mis ingresos, para mi sorpresa descubrí esta empresa llamada HIDROCOMPRAS.COM  </p><br />
                                <a className="btn btn-sm continuarLeye" id="botonContinuar" data-bs-toggle="collapse" href="#masInfor" role="button" aria-expanded="false" aria-controls="collapseExample" onClick={comportamiento} >
                                    Continuar leyendo ... 
                                </a>
                                <div className="collapse" id="masInfor">
                                    <p> Con su plan LEALTAD me gano una comisión por cada venta que hago a través de ellos, lo único que tengo que hacer es referir la venta con ellos por teléfono o WhatsApp y me parece bastante interesante por que es bien sencillo de pedir lo que se le va a instalar al cliente, ellos lo entregan, lo facturan. Ni el cliente ni yo gastamos tiempo ni gasolina. Ahora que estoy vendiendo a través de ellos cada vez que mi cliente necesite el cambio de un calentador, purificador, tanque o bomba para agua o la reparación de la misma, no lo hago con otra empresa, lo hago con HIDROCOMPRAS.COM por que con ellos gano mas.</p>
                                </div>
                                <a className="btn btn-sm" id="botonOcultar" style={{ display: 'none' }} data-bs-toggle="collapse" href="#masInfor" role="button" aria-expanded="false" aria-controls="collapseExample" onClick={ocultarTexto}>
                                    Ocultar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container text-center pb-5 mb-4" data-aos="flip-down">
                    <div className="cajaCir">
                        <div className="cajaCirHijo">
                            <div className="circulos"></div>
                            <div className="circulos"></div>
                            <div className="circulos"></div>
                            <div className="circulos"></div>
                            <div className="circulos"></div>
                            <div className="circulos"></div>
                            <div className="circulos"></div>
                        </div>
                    </div>
                </div>
                <div className="fondoBeige pt-2 pb-5 mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-6" data-aos="flip-up">
                                <div className="cajaWQue text-center">
                                    <br />
                                    <p className="h2 fw-bold text-center pt-1 mt-3">ÚNETE A LA COMUNIDAD DE PLOMEROS MÁS GRANDE DE GUATEMALA</p>
                                    <a className="btn btn-lg btn-dark animarBotonDescargar" rel="noreferrer">&nbsp;&nbsp;&nbsp;&nbsp;Registrarme ahora&nbsp;&nbsp;&nbsp;&nbsp;</a>
                                    <br />
                                    <div className="text-center" data-aos="flip-up">
                                    <br />
                                        <img src={Celular2} height="300" alt="Imagen Hidro"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6" data-aos="flip-up">
                                <div className="cajaWQue alinearTextoHidro">
                                    <img src={Celular} className="img-fluid" alt="Imagen Hidro" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Home;