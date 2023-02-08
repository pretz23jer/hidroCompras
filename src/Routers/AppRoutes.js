import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const AppRouters = () =>{
    return (
        <Router>
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
                        <a className="nav-link active" aria-current="page" href="/acerca">Acerca de Nosotros</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/productos">Productos</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/servicio">Servicios</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/socios">Marcas</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/contactar">Contáctanos</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/acerca">
            <About />
          </Route>
          <Route path="/producto">
            <Users />
          </Route>
          <Route path="/servicios">
            <Users />
          </Route>
          <Route path="/socio">
            <Home />
          </Route>
          <Route path="/contactar">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    )
}

export default AppRouters