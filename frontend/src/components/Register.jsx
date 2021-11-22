import React from "react";
import '../styles/register.css';

const Register = ()=>{
    return(
        <div className  ="complete">
        <div className  ="form-login">
            <form action="/registrarse" method="post">
                <h2>Registrase</h2>
            <label for="usuario">INGRESE SU NOMBRE DE USUARIO</label>
            <input id="usuario" value="kkkkk" name="usuario" type="text"/>
            <label for="password">INGRESE SU CONTRASEÑA</label>
            <input id="password" name="password" value="kkkkk" type="password"/>
            <input className    ="botton-login" type="submit" value="Ingresar"/>
            <a href="/login">Ya tienes cuenta</a>
            </form>
        </div>
    </div>
    );
}

export default Register;