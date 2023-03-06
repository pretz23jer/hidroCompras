import React, { Component } from "react";
import Logo from '../Resources/hlogo.png';
class UpdateHidro extends Component{
    render() {
        return(
            <>
                <div className="text-center fondoBeige pb-5 pt-2">
                    <div className="container bg-white asignarTamanio pb-4">
                        <img src={Logo} width="60" className="pt-4" alt="Imagen Hidro" />
                        <form method="post">
                            <div className="row">
                                <div className="col-12 pt-3">
                                    <label>País:</label>
                                    <select defaultValue={''} className="form-control" id="pais" name="pais" required>
                                        <option value='' disabled>Selecciona tu país</option>
                                        <option value="1_pais">Guatemala</option>
                                        <option value="2_pais">México</option>
                                        <option value="3_pais">El Salvador</option>
                                        <option value="4_pais">Honduras</option>
                                        <option value="5_pais">Nicaragua</option>
                                    </select>
                                </div>
                                <div className="col-12 pt-3">
                                    <label>Tipo de documento:</label>
                                    <select defaultValue={''} className="form-control" id="tipoDoc" name="tipoDoc" required>
                                        <option value="" disabled>Selecciona un tipo de docuemnto</option>
                                        <option value="1_doc">Número de Identificación Tributaria</option>
                                        <option value="2_doc">Documento Personal de Identificación</option>
                                        <option value="3_doc">Clave Única Registro Población</option>
                                        <option value="4_doc">Número de Pasaporte</option>
                                        <option value="5_doc">Documento Único de Identidad</option>
                                        <option value="6_doc">Cédula de Residente</option>
                                    </select>
                                </div>
                                <div className="col-12 pt-3">
                                    <label>Numero de documento:</label>
                                    <input className="form-control" name="numeroDoc" required/>
                                </div>
                            </div>
                            <div className="text-center pt-3">
                                <button href="#" type="submit" className="btn btn-warning btn-md">Actualizar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default UpdateHidro;