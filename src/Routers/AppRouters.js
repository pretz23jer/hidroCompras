import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Inicio from '../Pages/Inicio';
import Productos from "../Productos/Productos";
import Acerca from '../Pages/Acerca';
import Menu from '../Layout/Menu';

const AppRouters = () =>{
    return (
        <Router>
          <Menu />
          <Routes>
            <Route exact path="/producto" element={<Productos />} />
            <Route exact path="/acerca" element={<Acerca />} />
            <Route exact path="/" element={<Inicio />} />
          </Routes>
        </Router>
    );
}

export default AppRouters