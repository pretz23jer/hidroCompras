import React, { Component } from "react";
import Menu from '../Layouts/Menu';
import Footer from "../Layouts/Footer";
import UpdateHidro from "../Components/UpdateHidro";

class Actualizar extends Component{
    render() {
        return(
            <>
                <Menu />
                <UpdateHidro />
                <Footer />
            </>
        )
    }
}

export default Actualizar;