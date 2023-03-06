import React, { Component } from "react";
import fondoMarcas from "../Resources/servicio.jpg"

class ServiciosHidro extends Component{
    render() {
        return(
            <div className="estiloPagina">
                <div className="">
                        <img src={fondoMarcas} className="img-fluid" alt="Imagen Hidro" />
                </div>
                <div className="container-fluid text-center mt-3">
                    <p className="marcasEstilo">Sección Servicio</p>
                    <div className="text-center padreLineaAzul">
                        <div className="lineaAzul"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServiciosHidro;