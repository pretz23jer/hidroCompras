import React, { Component } from "react";
import Menu from '../Layouts/Menu';
import Footer from "../Layouts/Footer";
import Monedas from "../Components/Monedas";
import Boton from '../Layouts/Boton';
class Coins extends Component{
    render() {
        return(
            <div>
                <Menu />
                <Monedas />
                <Boton />
                <Footer/>
            </div>
        )
    }
}

export default Coins;