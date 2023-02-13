import React, { Component } from "react";
import Menu from '../Layout/Menu';
import Footer from "../Layout/Footer";
import SociosHidro from "../components/SociosHidro";

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