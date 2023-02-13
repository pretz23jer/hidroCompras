import React, { Component } from "react";
import hidro2 from './Img/hidroa.png';

function Menu(){
    return(
        <div>
            <nav className='navbar fixed-top mb-5 navbar-expand-md navbar-light bg-light' id="nbarras">
                <div className='container'>
                    <a className='navbar-brand' href="/"><img src={hidro2} width='50' /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navegacionMenu" aria-controls="navegacionMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navegacionMenu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                          <a className="nav-link active" href="/producto">Productos</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active" href="/servicio">Servicios</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active" href="/socio">Socios</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active" href="/contactar">Contacto</a>
                        </li>
                    </ul>
                    </div>
                    <div>
                      <ul className="nav justify-content-end">
                        <li className="nav-item">
                          <a className="nav-link" href="/auth/login">Inciar sesión</a>
                        </li>
                      </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Menu;