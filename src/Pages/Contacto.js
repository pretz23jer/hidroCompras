import React, { Component } from "react";
import Menu from '../Layout/Menu';
import Footer from "../Layout/Footer";
import Contactar from "../components/img/contactar2.png";
import ContactoHidro from "../components/ContactoHidro";

class Contacto extends Component{
    render() {
        return(
            <div>
                <Menu />
                <ContactoHidro />
                <Footer/>
            </div>
        )
    }
}

export default Contacto;