import React, {useEffect} from 'react';
import Boton from '../Layouts/Boton';
import imagenSobre from '../Resources/acerca.jpg';
import imagenSobre2 from '../Resources/cerca2.jpg';
import objetivo from '../Resources/cerca3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Menu from '../Layouts/Menu';
import Footer from "../Layouts/Footer";

function Acerca(){
    AOS.init();
    return (
        <div className="espacio">
            <Menu />
            <Boton />
            <div className="container" data-aos="fade-down">
                <div className="">
                    <div className="">
                        <img src={imagenSobre} className="img-fluid" alt='Imágen Hidrocompras' />
                    </div>
                    <h1 className="pt-3 tituloAcerca">Sobre Nosotros</h1>
                    <div className="text-start lineaAzulSobre"></div>
                    <div className="row">
                        <div className="col-12 col-md-7">
                            <p className="pt-4 mt-3">HIDROcompras.com fue fundada en Guatemala en el año 2021, desde entonces nos hemos convertido <strong>en la primera tienda en línea como distribuidor autorizado con stock de productos de soluciones hidráulicas residenciales y comerciales, luego inauguramos nuestra red de lealtad y de recompensas para nuestros afiliados.</strong><br /><br />

                            Tenemos como tarea importante recompensar a nuestros afiliados a través de <strong>múltiples estrategias</strong> y utilizamos la tecnología para garantizar los <strong>mejores beneficios </strong>en todas sus instalaciones hidráulicas residenciales.<br /><br />

                            <strong>HIDROCOMPRAS</strong> conecta a millones de personas y hogares con miles de técnicos – plomeros – instaladores que se encuentran buscando la oportunidad de servirle en sus necesidades hidráulicas residenciales. 

                            <strong>Somos una herramienta de venta, la conexión entre la necesidad del cliente y los productos que los técnicos – plomeros atienden </strong>, el cliente encontrará los productos a precios competitivos pero sus beneficios vienen desde el ahorrarse el tiempo y el combustible que usa para salir a buscar el equipo adecuado para su necesidad de agua, así como dolores de cabeza con el tráfico que únicamente nos quita nuestra paciencia y paz. 
                            </p>
                        </div>
                        <div className="col-12 col-md-4" data-aos="fade-down">
                            <img src={imagenSobre2} className='img-fluid' alt='Imágen Hidrocompras' />
                        </div>
                        <div className="row" data-aos="fade-down">
                            <div className="col-12">
                                <p>
                                Los equipos son facturados por HIDROCOMPRAS, entregados a la dirección que el cliente nos indique y todo lo hará en su celular desde la comodidad de su casa u oficina. Nuestros afiliados harán su trabajo normal asesorando como se debe, recomendándole los equipos y las marcas que usted como cliente necesita conocer. TODOS NUESTROS PRODUCTOS cuentan con garantía por desperfectos de fábrica de 1 año.<br /><br />

                                En Guatemala unimos al e-commerce, empresas reconocidas, y las marcas RHE (Residential Hydraulic Equipment) más grandes del mundo. <strong>Hacemos que cada compra valga la pena y le de satisfacción a nuestros clientes y afiliados.</strong><br /><br />
                                
                                <strong>Estamos cambiando la forma de comprar productos hidráulicos </strong>sin que el cliente se sienta no asesorado o solo.  <strong>Motivamos a nuestros afiliados</strong> a capacitarse y estar lo mejor preparados para que sin importar las condiciones de instalación que se puedan presentar, siempre estén preparados, es por eso que contamos con capacitaciones virtuales y presenciales impartidas por nuestros proveedores y representantes de marcas de cada categoría por separado, buscamos la excelencia y que nuestros afiliados sean parte de ella.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fondoAcerca pt-4 pb-4 mb-3" data-aos="fade-down">
                <div className="container pb-4">
                    <h2 className="pt-3 mt-2 tituloAcerca">Nuestro Objetivo</h2>
                    <div className="text-start lineaAzulSobre mb-4"></div>
                    <div className="row" data-aos="fade-down">
                        <div className="col-12 col-md-3 justify-content-center align-items-center">
                            <div className="text-end">
                                <img src={objetivo} className="img-fluid" alt='Imágen Hidrocompras' />
                            </div>
                        </div>
                        <div className="col-12 col-md-9 justify-content-center align-items-center contedoObjeto">
                            <div className="p-2 my-2 mx-2 mb-4 card">
                                <div className="card-body">
                                    <p>No solo afiliamos a personas increíbles, como tú que nos lees, también, día a día trabajamos en ampliarles sus habilidades para que ofrezcan el mejor servicio y tener clientes totalmente satisfechos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-4 py-4" data-aos="fade-down">
                <div className="container">
                    <h2 className="pt-3 mt-2 tituloAcerca">Misión, Visión, Valores</h2>
                    <div className="text-start lineaAzulSobre mb-4"></div>
                    <div className="row">
                        <div className="col-12 col-md-6" data-aos="fade-down">
                            <div className="mision">
                                <p className="textoVision">Misión</p>
                                <div className="lineaVisi mb-4"></div>
                                <p>A través de múltiples estrategias, utilizando tecnología recompensamos, capacitamos y certificamos a nuestros AFILIADOS garantizando los mejores beneficios en cada una de sus instalaciones hidráulicas.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6" data-aos="fade-down">
                            <div className="vision">
                                <p className="textoVision">Visión</p>
                                <div className="lineaVisi mb-4"></div>
                                <p>Ser la mejor herramienta digital de ventas de soluciones hidráulicas en Guatemala conectando a millones de personas y hogares a miles de AFILIADOS (plomeros y técnicos) certificados por las mejores marcas.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-12" data-aos="fade-down">
                            <div className="valores">
                                 <p className="textoVision">Valores</p>
                                 <div className="lineaVisi mb-4"></div>
                                 <p>Confianza y respaldo con nuestros afiliados, respeto y transparencia con nuestros proveedores, honradez y responsabilidad con nuestros clientes, comprometidos con la innovación.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fondoCelesteDemo" data-aos="fade-down">
                    <div className="text-white text-center">
                        <p className="fw-bold fs-1 h1 pt-3 pb-3">HIDROCOMPRAS <br />Tú mejor opción &#128512;</p>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Acerca