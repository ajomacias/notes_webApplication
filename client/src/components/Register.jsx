import React, { useState } from "react";
import '../styles/register.css';
import 'alertifyjs/build/css/alertify.css';
import { Link } from "react-router-dom";
import sendForm from "../auth/Register";

const Register = () => {

    return (
        <div className="complete">
         <div className="form-login">
          <form onSubmit={sendForm}>
            <h2>Registrase</h2>
            <label for="usuario">INGRESE SU NOMBRE DE USUARIO</label>
            <input id="usuario" type="text" required />
            <label for="password">INGRESE SU CONTRASEÑA</label>
            <input id="password" type="password" required />
            <input className="botton-login" type="submit" value="Ingresar" />
            <Link to="/login">Ya tienes cuenta</Link>
          </form>
          <button onClick={() => localStorage.removeItem("registros")} > remove localStorage </button>
         </div>
        </div>
    );
}

export default Register;