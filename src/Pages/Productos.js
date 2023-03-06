import React, { Component } from "react";
import Menu from '../Layouts/Menu';
import Footer from "../Layouts/Footer";
import ProductosHidro from "../Components/ProductosHidro";

class Productos extends Component{
    render() {
        return(
            <div className="estiloPagina">
                <Menu />
                <ProductosHidro />
                <Footer />
            </div>
        )
    }
}

export default Productos;