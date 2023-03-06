import React, { Component } from "react";
import Menu from '../Layouts/Menu';
import Footer from "../Layouts/Footer";
import SociosHidro from "../Components/SociosHidro";

class Socio extends Component{
    render() {
        return(
            <div className="estiloPagina">
                <Menu />
                <SociosHidro />
                <Footer />
            </div>
        )
    }
}

export default Socio;