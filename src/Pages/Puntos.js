import React, { Component } from "react";
import Menu from '../Layouts/Menu';
import Footer from "../Layouts/Footer";
import PuntosHidro from "../Components/PuntosHidro";

class Puntos extends Component{
    render() {
        return(
            <>
                <Menu />
                <PuntosHidro />
                <Footer />
            </>
        )
    }
}

export default Puntos;