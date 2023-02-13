import React, { Component } from "react";
import Logo from '../../Layout/Img/hidroa.png';

class Login extends Component{
    render() {
        return(
            <div className="logearse">
                <div className="estiloLogin">
                    <div className="cuerpo">
                        <div className="form-signin">
                            <form className="needs-validation" action="/login/autenticarse" method="get"  novalidate>
                                <div className="text-center"><img className="mb-4" src={Logo} width="72" height="57" /><br /></div>
                                <div className="form-floating">
                                <input type="email" className="form-control" id="correoUsuario" name="correoUsuario" placeholder="name@example.com" required />
                                <label>Correo Electronico</label>
                                </div>
                                <div className="form-floating">
                                <input type="password" className="form-control" id="contraUsuario"  name="contraUsuario" placeholder="Contraseña" required />
                                <label>Contraseña</label>
                                </div>

                                <div className="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me" /> Recordar
                                </label>
                                </div>
                                <button className="w-100 btn btn-sm btn-primary" type="submit">Iniciar sesión</button>
                            </form>
                            <div className="text-center mt-2">
                                <a href="/auth/restaurar">Olvidé mi contraseña</a>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login