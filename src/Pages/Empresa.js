import React, { Component } from "react";
import Menu from '../Layouts/Menu';
import Footer from "../Layouts/Footer";
import EmpresaHidro from "../Components/EmpresaHidro";

class Empresa extends Component{
    render() {
        return(
            <>
                <Menu />
                <EmpresaHidro />
                <Footer />
            </>
        )
    }
}

export default Empresa;