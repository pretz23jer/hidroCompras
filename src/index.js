import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery/dist/jquery.js';
import '../src/App.css'
import Menu from './layout/Menu';
import Enunciado from './components/Enunciado';
import Marca from './components/Marcas';
import Footer from './layout/Footer';
import Contenido from './components/Contenido';

const menu = ReactDOM.createRoot(document.getElementById('menu'));
menu.render(
  <React.StrictMode>
    <Menu />
  </React.StrictMode>
);

const enunciado = ReactDOM.createRoot(document.getElementById('enunciado'));
enunciado.render(
  <React.StrictMode>
    <Enunciado />
  </React.StrictMode>
);

const footer = ReactDOM.createRoot(document.getElementById('pie'));
footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);

const marca = ReactDOM.createRoot(document.getElementById('marca'));
marca.render(
  <React.StrictMode>
    <Marca />
  </React.StrictMode>
);

const contenido = ReactDOM.createRoot(document.getElementById('contenido'));
contenido.render(
  <React.StrictMode>
    <Contenido />
  </React.StrictMode>
);