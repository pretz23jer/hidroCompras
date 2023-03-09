import React, { Component } from "react";
<<<<<<< HEAD
import Menu from '../Layouts/Menu';
import Footer from "../Layouts/Footer";
import ProductosHidro from "../Components/ProductosHidro";
=======
import Menu from '../Layout/Menu';
import Footer from "../Layout/Footer";
import ProductosHidro from "../components/ProductosHidro";
>>>>>>> 4ef920d8a9a6f9378591e2f0e1ea4aec7fd59df4

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