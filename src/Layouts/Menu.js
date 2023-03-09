import React from "react";
import hidro2 from '../Resources/hlogo.png';

function Menu(){
  function activar(){
    document.getElementById('listaMenu').className = 'nav-link show';
    document.getElementById('listaMenu').setAttribute("aria-expanded", "true");
    document.getElementById('ulEstilizar').className = 'dropdown-menu format show';
    document.getElementById('ulEstilizar').setAttribute("data-bs-popper", "static");
  }
  
  return(
        <div>
          <nav className="navbar navbar-expand navbar-light bg-light" >
            <div className="container">
                <div className="collapse navbar-collapse">
                  <ul className="navbar-nav me-auto">
                    <li className="nav-item dropdown">
                      <a className="nav-link" href="#" onMouseOver={activar} id="listaMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false" rel="noreferrer">
                        <i className="fa fa-bars fa-2x"></i>
                      </a>
                      <ul className="dropdown-menu format" id="ulEstilizar" aria-labelledby="listaMenu">
                        <div>
                          <li>
                            <a className="espaciarMenu" href="/coins" > HIDRO-FICHAS</a>
                          </li>
                          <li>
                            <a className="espaciarMenu" href="/puntos" >PUNTOS</a>
                          </li>
                          <li>
                            <a className="espaciarMenu" href="https://play.google.com/store/apps/" target="_blank"  rel="noopener noreferrer">DESCARGA LA APP</a>
                          </li>
                          <li>
                            <a className="espaciarMenu" href="/empresa" >HIDROCOMPRAS PARA EMPRESAS</a>
                          </li>
                        </div>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <div className="d-flex separarLogo">
                        <a className='navbar-brand' href="/" ><img src={hidro2} height='40' /></a>
                      </div>
                    </li>
                  </ul>
                </div>
            </div>
          </nav>
        </div>
    )
}

export default Menu;