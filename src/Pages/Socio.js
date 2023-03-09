import React, { Component } from "react";
<<<<<<< HEAD
import Menu from '../Layouts/Menu';
import Footer from "../Layouts/Footer";
import SociosHidro from "../Components/SociosHidro";
=======
import Menu from '../Layout/Menu';
import Footer from "../Layout/Footer";
import SociosHidro from "../components/SociosHidro";
>>>>>>> 4ef920d8a9a6f9378591e2f0e1ea4aec7fd59df4

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