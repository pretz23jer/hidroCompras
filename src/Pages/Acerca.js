import React, {useEffect} from 'react';
<<<<<<< HEAD
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
=======
import Boton from '../Layout/Boton';
import imagenSobre from '../Pages/acerca.jpg';
import imagenSobre2 from '../Pages/cerca2.jpg';
import objetivo from '../Pages/cerca3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Menu from '../Layout/Menu';
import Footer from "../Layout/Footer";

function Acerca(){
    useEffect(() => {
        AOS.init();
      }, [])

>>>>>>> 4ef920d8a9a6f9378591e2f0e1ea4aec7fd59df4
    return (
        <div className="espacio">
            <Menu />
            <Boton />
<<<<<<< HEAD
            <div className="container" data-aos="fade-down">
                <div className="">
                    <div className="">
                        <img src={imagenSobre} className="img-fluid" alt='Imágen Hidrocompras' />
=======
            <div className="container" data-aos="down-up">
                <div className="">
                    <div className="">
                        <img src={imagenSobre} className="img-fluid" />
>>>>>>> 4ef920d8a9a6f9378591e2f0e1ea4aec7fd59df4
                    </div>
                    <h1 className="pt-3 tituloAcerca">Sobre Nosotros</h1>
                    <div className="text-start lineaAzulSobre"></div>
                    <div className="row">
                        <div className="col-12 col-md-7">
                            <p className="pt-4 mt-3">HIDROcompras.com fue fundada en Guatemala en el año 2021, desde entonces nos hemos convertido <strong>en la primera tienda en línea como distribuidor autorizado con stock de productos de soluciones hidráulicas residenciales y comerciales, luego inauguramos nuestra red de lealtad y de recompensas para nuestros afiliados.</strong><br /><br />

                            Tenemos como tarea importante recompensar a nuestros afiliados a través de <strong>múltiples estrategias</strong> y utilizamos la tecnología para garantizar los <strong>mejores beneficios </strong>en todas sus instalaciones hidráulicas residenciales.<br /><br />

<<<<<<< HEAD
                            <strong>HIDROCOMPRAS</strong> conecta a millones de personas y hogares con miles de técnicos – plomeros – instaladores que se encuentran buscando la oportunidad de servirle en sus necesidades hidráulicas residenciales. <br />

                            <strong> Somos una herramienta de venta, la conexión entre la necesidad del cliente y los productos que los técnicos – plomeros atienden </strong>, el cliente encontrará los productos a precios competitivos pero sus beneficios vienen desde el ahorrarse el tiempo y el combustible que usa para salir a buscar el equipo adecuado para su necesidad de agua, así como dolores de cabeza con el tráfico que únicamente nos quita nuestra paciencia y paz. 
                            </p>
                        </div>
                        <div className="col-12 col-md-4" data-aos="fade-down">
                            <img src={imagenSobre2} className='img-fluid' alt='Imágen Hidrocompras' />
=======
                            <strong>HIDROCOMPRAS</strong> conecta a millones de personas y hogares con miles de técnicos – plomeros – instaladores que se encuentran buscando la oportunidad de servirle en sus necesidades hidráulicas residenciales. 

                            <strong>Somos una herramienta de venta, la conexión entre la necesidad del cliente y los productos que los técnicos – plomeros atienden </strong>, el cliente encontrará los productos a precios competitivos pero sus beneficios vienen desde el ahorrarse el tiempo y el combustible que usa para salir a buscar el equipo adecuado para su necesidad de agua, así como dolores de cabeza con el tráfico que únicamente nos quita nuestra paciencia y paz. 
                            </p>
                        </div>
                        <div className="col-12 col-md-4">
                            <img src={imagenSobre2} className='img-fluid' />
>>>>>>> 4ef920d8a9a6f9378591e2f0e1ea4aec7fd59df4
                        </div>
                        <div className="row" data-aos="fade-down">
                            <div className="col-12">
                                <p>
                                Los equipos son facturados por HIDROCOMPRAS, entregados a la dirección que el cliente nos indique y todo lo hará en su celular desde la comodidad de su casa u oficina. Nuestros afiliados harán su trabajo normal asesorando como se debe, recomendándole los equipos y las marcas que usted como cliente necesita conocer. TODOS NUESTROS PRODUCTOS cuentan con garantía por desperfectos de fábrica de 1 año.<br /><br />

<<<<<<< HEAD
                                En Guatemala unimos al e-commerce con empresas reconocidas y las marcas RHE (Residential Hydraulic Equipment) más grandes del mundo. <strong>Hacemos que cada compra valga la pena y le de satisfacción a nuestros clientes y afiliados.</strong><br /><br />
=======
                                En Guatemala unimos al e-commerce, empresas reconocidas, y las marcas RHE (Residential Hydraulic Equipment) más grandes del mundo. <strong>Hacemos que cada compra valga la pena y le de satisfacción a nuestros clientes y afiliados.</strong><br /><br />
>>>>>>> 4ef920d8a9a6f9378591e2f0e1ea4aec7fd59df4
                                
                                <strong>Estamos cambiando la forma de comprar productos hidráulicos </strong>sin que el cliente se sienta no asesorado o solo.  <strong>Motivamos a nuestros afiliados</strong> a capacitarse y estar lo mejor preparados para que sin importar las condiciones de instalación que se puedan presentar, siempre estén preparados, es por eso que contamos con capacitaciones virtuales y presenciales impartidas por nuestros proveedores y representantes de marcas de cada categoría por separado, buscamos la excelencia y que nuestros afiliados sean parte de ella.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<<<<<<< HEAD
            <div className="fondoAcerca pt-4 pb-4 mb-3" data-aos="fade-down">
                <div className="container pb-4">
                    <h2 className="pt-3 mt-2 tituloAcerca">Nuestro Objetivo</h2>
                    <div className="text-start lineaAzulSobre mb-4"></div>
                    <div className="row" data-aos="fade-down">
                        <div className="col-12 col-md-3 justify-content-center align-items-center">
                            <div className="text-end">
                                <img src={objetivo} className="img-fluid" alt='Imágen Hidrocompras' />
=======
            <div className="fondoAcerca pt-4 pb-4 mb-3" data-aos="fade-up">
                <div className="container pb-4">
                    <h2 className="pt-3 mt-2 tituloAcerca">Nuestro Objetivo</h2>
                    <div className="text-start lineaAzulSobre mb-4"></div>
                    <div className="row">
                        <div className="col-12 col-md-3 justify-content-center align-items-center">
                            <div className="text-end">
                                <img src={objetivo} className="img-fluid" />
>>>>>>> 4ef920d8a9a6f9378591e2f0e1ea4aec7fd59df4
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
<<<<<<< HEAD
=======
            <div className="pt-2" data-aos="fade-down">
                <div className="container pb-4">
                    <h2 className="py-3 my-2 tituloAcerca">¿Qué hacen nuestros afiliados?</h2>
                    <div className="text-start lineaAzulSobre mb-4"></div>
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-4 mt-2 ">
                            <div className="card tarjetasAcerca">
                                <div className="card-body">
                                    <p className="text-center letraObjeti">VISITAN A SUS PROPIOS CLIENTES</p>
                                    <p>Tu te quedas con tus propios clientes, incluso nosotros te brindaremos oportunidades de conectar con más clientes nuevos que necesiten de tus servicios.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4 mt-2 ">
                            <div className="card tarjetasAcerca">
                                <div className="card-body">
                                    <p className="text-center letraObjeti">ASESORAN BIEN A SUS CLIENTES</p>
                                    <p>Ya que detectaste el problema hidráulico que tiene, brinda la solución hidráulica con nuestra tienda en linea y nuestra app HIDROCOMPRAS y gana comisiones con los mismos equipos que instalas.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4 mt-2">
                            <div className="card tarjetasAcerca">
                                <div className="card-body">
                                    <p className="text-center letraObjeti">REFIEREN LOS EQUIPOS QUE INSTALAN</p>
                                    <p>Nosotros haremos todo, facturamos al NIT que el cliente pida, entregamos en la dirección que el cliente indique (aplica restricciones) * tu instalas y ganas.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 mt-2">
                            <div className="card acercaTexto">
                                <div className="card-body">
                                    <p className="text-center letraObjeti">REVISAN SU BILLETERA DIGITAL</p>
                                    <p>Si a tu instalación le sirve cualquiera de nuestros productos para ganar comisión, haz la venta con nuestra app y podrás monitorear cuánto vas ganando por cada venta que hagas con nosotros, a finalizar cada mes, lo que tengas acumulado en comisión puedes reclamarlo en efectivo, Gift Cards de Supermercados o adquirir cualquiera de los productos de nuestra tienda en línea.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 mt-2">
                            <div className="card acercaTexto">
                                <div className="card-body">
                                    <p className="text-center letraObjeti">SE CAPACITAN Y CERTIFICAN</p>
                                    <p>Si tus habilidades son LIMITADAS, no te preocupes, contamos con PROFESIONALES EN CADA CATEGORÍA que impartirán capacitaciones programadas de forma presencial y virtual para que vayas adquiriendo mayor conocimiento y así puedas atender a más clientes y no perder instalaciones que pueden transformarse en más comisiones para ti.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fondoAcerca" data-aos="fade-up">
                <div className="container my-4 py-4 ">
                    <h2 className="pt-3 mt-2 tituloAcerca">¿Quieres unirte?</h2>
                    <div className="text-start lineaAzulSobre mb-4"></div>
                    <p className="">¡Estamos trabajando para revolucionar la manera en que las personas hacen sus compras hidráulicas!</p>
                    <p className="fw-bold">Buscamos Plomeros que quieran aumentar sus ingresos haciendo lo mismo que hacen todos los dias, asesorar a sus propios clientes y usarnos como herramienta de venta para así ganar comisión de lo que recomiendan e instalan, que quieran capacitarse y certificarse para ganar más conocimiento en el área que se especializan o que quieran aprender de otra área totalmente nueva.</p>
                </div>
            </div>
>>>>>>> 4ef920d8a9a6f9378591e2f0e1ea4aec7fd59df4
            <div className="my-4 py-4" data-aos="fade-down">
                <div className="container">
                    <h2 className="pt-3 mt-2 tituloAcerca">Misión, Visión, Valores</h2>
                    <div className="text-start lineaAzulSobre mb-4"></div>
                    <div className="row">
<<<<<<< HEAD
                        <div className="col-12 col-md-6" data-aos="fade-down">
=======
                        <div className="col-12 col-md-6">
>>>>>>> 4ef920d8a9a6f9378591e2f0e1ea4aec7fd59df4
                            <div className="mision">
                                <p className="textoVision">Misión</p>
                                <div className="lineaVisi mb-4"></div>
                                <p>A través de múltiples estrategias, utilizando tecnología recompensamos, capacitamos y certificamos a nuestros AFILIADOS garantizando los mejores beneficios en cada una de sus instalaciones hidráulicas.</p>
                            </div>
                        </div>
<<<<<<< HEAD
                        <div className="col-12 col-md-6" data-aos="fade-down">
=======
                        <div className="col-12 col-md-6">
>>>>>>> 4ef920d8a9a6f9378591e2f0e1ea4aec7fd59df4
                            <div className="vision">
                                <p className="textoVision">Visión</p>
                                <div className="lineaVisi mb-4"></div>
                                <p>Ser la mejor herramienta digital de ventas de soluciones hidráulicas en Guatemala conectando a millones de personas y hogares a miles de AFILIADOS (plomeros y técnicos) certificados por las mejores marcas.</p>
                            </div>
                        </div>
<<<<<<< HEAD
                        <div className="col-12 col-md-12" data-aos="fade-down">
=======
                        <div className="col-12 col-md-12">
>>>>>>> 4ef920d8a9a6f9378591e2f0e1ea4aec7fd59df4
                            <div className="valores">
                                 <p className="textoVision">Valores</p>
                                 <div className="lineaVisi mb-4"></div>
                                 <p>Confianza y respaldo con nuestros afiliados, respeto y transparencia con nuestros proveedores, honradez y responsabilidad con nuestros clientes, comprometidos con la innovación.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<<<<<<< HEAD
            <div className="fondoCelesteDemo" data-aos="fade-down">
                    <div className="text-white text-center">
                        <p className="fw-bold fs-1 h1 pt-3 pb-3">HIDROCOMPRAS <br />Tú mejor opción</p>
                    </div>
                </div>
=======
>>>>>>> 4ef920d8a9a6f9378591e2f0e1ea4aec7fd59df4
            <Footer />
        </div>
    )
}

export default Acerca