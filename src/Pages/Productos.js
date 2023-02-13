import React, { Component } from "react";
import Menu from '../Layout/Menu';
import Footer from "../Layout/Footer";
import ProductosHidro from "../components/ProductosHidro";

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