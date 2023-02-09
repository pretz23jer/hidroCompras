import React, {Component} from "react";
import marca1 from './img/AFT.png';
import marca2 from './img/AMERICAN-PROLINE.jpg';
import marca3 from './img/ANAUGER.jpg';
import marca4 from './img/APEC.png';
import marca5 from './img/aqua.png';
import marca6 from './img/AQUACHLOR-POOL.png';
import marca7 from './img/AQUAPRO.png';
import marca8 from './img/AQUATHERMAX.png';
import marca9 from './img/BERKELEY.png';
import marca10 from './img/BOSHART-INDUSTRIES.png';
import marca11 from './img/CLEAR-AQUA.jpg';
import marca12 from './img/DAB.jpg';
import '../components/Carusel';

class Marcas extends Component{
    render() {
        return(
            <div className="estiloPagina">
                <div className="container-fluid text-center">
                    <p className="marcasEstilo">DISTRIBUYENDO LAS MEJORES MARCAS EN LATINOAMÉRICA</p>
                    <div className="text-center padreLineaAzul">
                        <div className="lineaAzul"></div>
                    </div>
                </div>
                <div className="container bg-white">
                    <div className="row mx-auto my-auto justify-content-center">
                        <div id="carruselMarcas" className="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="col-md-3">
                                        <div className="estiloCard">
                                            <div className="card-img">
                                                <div className="espacioCard">
                                                    <img src={marca1} className="d-block w-100" />
                                                </div>
                                            </div> 
                                        </div> 
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="col-md-3">
                                        <div className="estiloCard">
                                            <div className="card-img">
                                                <div className="espacioCard">
                                                    <img src={marca2} className="d-block w-100" />
                                                </div>
                                            </div> 
                                        </div> 
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="col-md-3">
                                        <div className="estiloCard">
                                            <div className="card-img">
                                                <div className="espacioCard">
                                                    <img src={marca3} className="d-block w-100" />
                                                </div>
                                            </div> 
                                        </div> 
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="col-md-3">
                                        <div className="estiloCard">
                                            <div className="card-img">
                                                <div className="espacioCard">
                                                    <img src={marca4} className="d-block w-100" />
                                                </div>
                                            </div> 
                                        </div> 
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="col-md-3">
                                        <div className="estiloCard">
                                            <div className="card-img">
                                                <div className="espacioCard">
                                                    <img src={marca5} className="d-block w-100" />
                                                </div>
                                            </div> 
                                        </div> 
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="col-md-3">
                                        <div className="estiloCard">
                                            <div className="card-img">
                                                <div className="espacioCard">
                                                    <img src={marca6} className="d-block w-100" />
                                                </div>
                                            </div> 
                                        </div> 
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="col-md-3">
                                        <div className="estiloCard">
                                            <div className="card-img">
                                                <div className="espacioCard">
                                                    <img src={marca7} className="d-block w-100" />
                                                </div>
                                            </div> 
                                        </div> 
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="col-md-3">
                                        <div className="estiloCard">
                                            <div className="card-img">
                                                <div className="espacioCard">
                                                    <img src={marca8} className="d-block w-100" />
                                                </div>
                                            </div> 
                                        </div> 
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carruselMarcas" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carruselMarcas" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Marcas;