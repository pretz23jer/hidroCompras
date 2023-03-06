import React, { Component } from "react";
import Menu from '../Layouts/Menu';
import Footer from "../Layouts/Footer";
import ContactoHidro from "../Components/ContactoHidro";

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