import React, { Component } from "react";
import Menu from '../Layouts/Menu';
import Footer from "../Layouts/Footer";
import PreguntasHidro from "../Components/PreguntasHidro";

class Preguntas extends Component{
    render() {
        return(
            <>
                <Menu />
                <PreguntasHidro />
                <Footer />
            </>
        )
    }
}

export default Preguntas;