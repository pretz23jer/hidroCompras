import React, { Component } from "react";
<<<<<<< HEAD
import Menu from '../Layouts/Menu';
import Footer from "../Layouts/Footer";
import ContactoHidro from "../Components/ContactoHidro";
=======
import Menu from '../Layout/Menu';
import Footer from "../Layout/Footer";
import Contactar from "../components/img/contactar2.png";
import ContactoHidro from "../components/ContactoHidro";
>>>>>>> 4ef920d8a9a6f9378591e2f0e1ea4aec7fd59df4

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