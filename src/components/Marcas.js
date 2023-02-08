import React, { Component } from "react";
import  './Carusel';
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

let items = document.querySelectorAll('.carousel .carousel-item');

function Accion(){
    items.forEach((el) => {
        const minPerSlide = 4
        let next = el.nextElementSibling
        for (var i=1; i<minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items[0]
            }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
        console.log('ejecuta este codigo')
    });
};

class Marcas extends Component{
    render() {
        Accion()
        return(
            <div className="estiloPagina">
                <div className="container-fluid text-center">
                    <p className="marcasEstilo">DISTRIBUYENDO LAS MEJORES MARCAS EN LATINOAMÉRICA</p>
                    <div className="text-center padreLineaAzul">
                        <div className="lineaAzul"></div>
                    </div>
                </div>
                <div className="container">
                    <div className="row mx-auto my-auto justify-content-center">
                        <div id="carruselMarcas" className="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active">
                                    <div className="col-md-3">
                                        <div className="card">
                                            <div className="card-img">
                                                <img src={marca1} width="500" height="400" className="img-fluid" />
                                            </div> 
                                        </div>
                                    </div> 
                                </div>
                                <div className="carousel-item">
                                    <div className="col-md-3">
                                        <div className="card">
                                            <div className="card-img"><img src={marca2} width="500" height="400" className="img-fluid" /></div> 
                                        </div>
                                    </div> 
                                </div>
                                <div className="carousel-item">
                                    <div className="col-md-3">
                                        <div className="card">
                                            <div className="card-img"><img src={marca3} className="img-fluid" /></div> 
                                        </div>
                                    </div> 
                                </div>
                                <div className="carousel-item">
                                    <div className="col-md-3">
                                        <div className="card">
                                            <div className="card-img"><img src={marca4} className="img-fluid" /></div> 
                                        </div>
                                    </div> 
                                </div>
                                <div className="carousel-item">
                                    <div className="col-md-3">
                                        <div className="card">
                                            <div className="card-img"><img src={marca5} className="img-fluid" /></div> 
                                        </div>
                                    </div> 
                                </div>
                                <div className="carousel-item">
                                    <div className="col-md-3">
                                        <div className="card">
                                            <div className="card-img"><img src={marca6} className="img-fluid" /></div> 
                                        </div>
                                    </div> 
                                </div>
                                <div className="carousel-item">
                                    <div className="col-md-3">
                                        <div className="card">
                                            <div className="card-img"><img src={marca7} className="img-fluid" /></div> 
                                        </div>
                                    </div> 
                                </div>
                                <div className="carousel-item">
                                    <div className="col-md-3">
                                        <div className="card">
                                            <div className="card-img"><img src={marca8} className="img-fluid" /></div> 
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