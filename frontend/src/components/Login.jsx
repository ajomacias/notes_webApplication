import React, { useState, useEffect } from "react";
import LoginService from '../services/User';

const Login = ()=>{
    
    const [userName, setuserName] = useState('');
    const [userPassword, setuserPassword] = useState('');
    const [user, setUser] = useState(null);
    const handleLogin = async(event)=>{
        event.preventDefault();
        LoginService.Login()
    }
    return(
        <div>
            <div className="complete">
        <div className="form-login">
            <form action="#" onSubmit={handleLogin}>
                <h2>login</h2>
            <label for="usuario">INGRESE SU NOMBRE DE USUARIO</label>
            <input id="usuario" value={userName} onChange={(event)=>setuserName(event.target.value)} name="usuario" type="text" required />
            <label for="password">INGRESE SU CONTRASEÑA</label>
            <input id="password" name="password" value={userPassword} onChange={(event)=> setuserPassword(event.target.value)} type="password" required />
            <input className="botton-login" type="submit" value="Ingresar" />
            <a href="/register">No tienes cuenta</a>
            </form>
        </div>
    </div>
        </div>
    );
}

export default Login;