import React, { Component } from "react";
import Video from '../Resources/video.mp4';

import marca1 from '../Resources/marca1.png';
import marca2 from '../Resources/marca2.png';
import marca3 from '../Resources/marca3.png';
import marca4 from '../Resources/marca4.png';
import marca5 from '../Resources/marca5.png';
import marca6 from '../Resources/marca6.png';

import asesor from '../Resources/asesor.png';
import casco from '../Resources/casco.ico';
import envio from '../Resources/envio.ico';
import motor from '../Resources/motor.ico';
import seguri from '../Resources/seguridad.ico';
import descuento from '../Resources/descuento.ico';
import telefono from '../Resources/telefono.ico';
import reloj from '../Resources/reloj.ico';
import anuncio from '../Resources/anuncio.jpg';
import click from '../Resources/verde.ico';
import bombas from '../Resources/p6.png';
import depositos from '../Resources/purifica.png';
import calentadores from '../Resources/calentador.png';

import Categoria1 from '../Resources/cat1.png';
import Categoria2 from '../Resources/cat2.png';
import Categoria3 from '../Resources/cat3.png';
import Categoria4 from '../Resources/cat4.png';
import Categoria5 from '../Resources/cat5.png';

import PlayStore from '../Resources/googleplay.png';
import AppStore from '../Resources/appstore.png';
import Iphone from '../Resources/iphone2.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

class EmpresaHidro extends Component{
    render() {
        AOS.init();

        let direccion = '.';

        var form = document.forms['agendarCita'];
        form.onSubmit = function(e){
            e.preventDefault();
            var select = document.form.nombreClie.value;
            console.log(select);
        }



        function enviarData(){
        let Apellidos = '';
        let Correo = '';

        //let direccion = 'https://api.whatsapp.com/send/?phone=50230656786&text=Hola%2C+le+comento+que+me+interes%C3%B3+el+producto+%3A+&type=phone_number&app_absent=0';
        }
        return(
            <>
                <div className="container text-center pt-3 pb-5" data-aos="fade-down">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <p className="fs-2 fw-bold pt-5">ÚNETE A HIDROCOMPRAS Y PROLONGA LA VIDA DE TUS EQUIPOS HIDRÁULICOS</p>
                            <p className="fs-5">Con nuestro programa de asistencias puedes brindarles un excelente mantenimiento preventivo a tus equipos y así duraran mucho más tiempo.</p>
                            <div className="pt-1 mt-1">
                                <form className="row g-3" action={direccion} name="agendarCita" target="_blank" rel="noreferrer">
                                    <div className="col-auto">
                                        <input type="text" className="form-control" id="nombreClie" name="nombreClie" placeholder="Nombres" required/>
                                    </div>
                                    <div className="col-auto">
                                        <input type="text" className="form-control" id="apellidoClie" name="apellidoClie" placeholder="Apellidos" required/>
                                    </div>
                                    <div className="col-auto">
                                        <input type="email" className="form-control" id="emailClie" name="emailClie" placeholder="Correo Electrónico" required/>
                                    </div>
                                    <div className="col-auto">
                                        <button type="submit" className="btn btn-primary btn-md">Agendar Cita</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div>
                            <video className="img-fluid" controls autoPlay={true} muted={true} loop alt="Imagen General">
                                <source src={Video} type="video/mp4" />
                            </video>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fondoBeige pt-5 mb-5" data-aos="fade-down">
                    <div className="container text-center">
                        <p className="fs-4">MÁS DE <strong>30</strong> MARCAS EN GUATEMALA CONFÍAN EN HIDROCOMPRAS</p>
                        <div className="row">
                            <div className="col-6 col-lg-2">
                                <div className="p-4">
                                    <img src={marca1} className="img-fluid" alt="Marca Empresa"/>
                                </div>
                            </div>
                            <div className="col-6 col-lg-2">
                                <div className="p-4">
                                    <img src={marca2} className="img-fluid" alt="Marca Empresa"/>
                                </div>
                            </div>
                            <div className="col-6 col-lg-2">
                                <div className="p-4">
                                    <img src={marca3} className="img-fluid" alt="Marca Empresa"/>
                                </div>
                            </div>
                            <div className="col-6 col-lg-2">
                                <div className="p-4">
                                    <img src={marca4} className="img-fluid" alt="Marca Empresa"/>
                                </div>
                            </div>
                            <div className="col-6 col-lg-2">
                                <div className="p-4">
                                    <img src={marca5} className="img-fluid" alt="Marca Empresa"/>
                                </div>
                            </div>
                            <div className="col-6 col-lg-2">
                                <div className="p-4">
                                    <img src={marca6} className="img-fluid" alt="Marca Empresa"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white pt-5 mb-5" data-aos="fade-down">
                    <div className="container">
                        <p className="fs-3 text-center">¡TODO LO QUE NECESITAS PARA PROLONGAR LA VIDA DE TUS EQUIPOS!</p>
                    </div>
                    <div className="container pt-5 mt-5">
                        <div className="row textoCotizaEspa">
                            <div className="col-12 col-md-6 col-lg-6">
                                    <p className="cotizaTexto fs-3 fw-bold">Productos de alta calidad,<br /> eficiencia  y garantía</p>
                                <div className="d-flex">
                                    <img src={casco} height="35"  alt="Marca Empresa"/><p className="ajusteTexto">Contamos con <strong>asesoría técnica</strong>  en instalación de nuestros productos adquiridos.</p>
                                </div>
                                <div className="d-flex">
                                    <img src={motor} height="35"  alt="Marca Empresa"/><p className="ajusteTexto"><strong>Marcas reconocidas</strong> en productos hidráulicos residenciales e industriales.</p>
                                </div>
                                <div className="d-flex">
                                    <img src={seguri} height="35"  alt="Marca Empresa"/><p className="ajusteTexto">Compras <strong>seguras</strong> y fiables en todos nuestros productos, así también garantía por desperfecto de fábrica</p>
                                </div>
                                <div className="d-flex">
                                    <img src={envio} height="35"  alt="Marca Empresa"/><p className="ajusteTexto"><strong>Envíos</strong> a todo el país, trabajando con las empresas de paquetería y envíos: <strong>FORZA, CARGO EXPRESO</strong> y <strong>GUATEX</strong></p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6">
                                <img src={asesor} height="350" className="img-fluid"  alt="Marca Empresa"/>
                            </div>
                        </div>
                    </div>
                    <div className="container segmentoDos pt-5 mt-5" data-aos="down-up">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-6">
                                <img src={anuncio} height="200" className="img-fluid pb-3"  alt="Marca Empresa"/>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6 pt-5">
                                <p className="cotizaTexto pt-4">Desde tu hogar u oficina puedes adquirir nuestros productos, realizar <br /> compras y mucho más...</p>
                                <div className="d-flex">
                                    <img src={telefono} height="30" alt="Marca Empresa" /><p className="ajusteTexto">&nbsp; &nbsp;Puedes visitarnos por medio de tu <strong>Smartphone</strong>  o computadora</p>
                                </div>
                                <div className="d-flex">
                                    <img src={reloj} height="30" alt="Marca Empresa" /><p className="ajusteTexto">&nbsp; &nbsp;Nuestro sitio disponible las <strong>24 /7 </strong> los 365 días</p>
                                </div>
                                <div className="d-flex">
                                    <i className="fa fa-facebook fa-lg"></i><p className="ajusteTexto">&nbsp; &nbsp; &nbsp; &nbsp;Contamos con nuestras <strong>Redes Sociales</strong> para que nos sigues y te puedas comunicar con nosotros</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-black pt-5 pb-5 text-center" data-aos="fade-down">
                        <p className="fs-3 fw-bold text-white lh-2 pt-3">Conoce ahora como puedes prolongar la vida de tus equipos <br />Hidráulicos de tu empresa con HIDROCOMPRAS.</p>
                        <a href="#" className="btn btn-md btn-warning" rel="noreferrer">Agendar Cita</a><br /><br />
                    </div>
                    <div className="bombaAgua pt-5 pb-5" data-aos="down-up">
                        <p className="contactar text-center text-black fs-3" >ADQUIERE TUS PRODUCTOS EN HIDROCOMPRAS!</p>
                        <p className="text-center text-black">Recuerde que con Hidrocompras encuentras todos los equipos hidráulicos residenciales e industriales.</p>
                        <p className="text-center text-black">Cotiza en un solo clic <img src={click} width="50" alt="imagen-hidro"/> </p>
                    </div>
                    <div className="container concatacnos" data-aos="down-up">
                        <p className="cotizaTexto text-center fs-3 fw-bold">PRODUCTOS PARA EL HOGAR</p><br/><br/>
                        <div className="text-center">
                            <div className="row">
                                <div className="col-1 col-lg-1"></div>
                                <div className="col-6 col-lg-2">
                                    <div className="text-center">
                                        <img src={Categoria1} className="img-fluid" alt="productos" />
                                        <p className="fw-bold">BOMBAS</p>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-2">
                                    <div className="text-center">
                                        <img src={Categoria2} className="img-fluid" alt="productos" />
                                        <p className="fw-bold">CALENTADORES</p>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-2">
                                    <div className="text-center">
                                        <img src={Categoria3} className="img-fluid" alt="productos" />
                                        <p className="fw-bold">FILTROS</p>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-2">
                                    <div className="text-center">
                                        <img src={Categoria4} className="img-fluid" alt="productos" />
                                        <p className="fw-bold">COMBOS HIDRONEUMATICOS</p>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-2">
                                    <div className="text-center">
                                        <img src={Categoria5} className="img-fluid" alt="productos" />
                                        <p className="fw-bold">TANQUES HIDRONEUMATICOS</p>
                                    </div>
                                </div>
                                <div className="col-1 col-lg-1"></div>
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
                                            <a href="https://play.google.com/store/games?hl=es" target="_blank" rel="noreferrer">
                                                <img src={PlayStore} height="50" alt="Imagen Hidro" />
                                            </a>
                                        </div>
                                        <div className="p-1 m-1" >
                                            <a href="https://apps.apple.com/es/app/apple-store/" target="_blank" rel="noreferrer">
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
                <br /><br />
            </>
        )
    }
}

export default EmpresaHidro;