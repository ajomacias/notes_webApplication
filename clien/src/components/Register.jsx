import React, { useState } from "react";
import '../styles/register.css';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import { ApiUri } from "../helpers/ApiUri"

const Register = () => {
    const [pass, setPass] = useState(null)
    const [usuario, setUsuario] = useState(null)
    const [restrict, setRestrict] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [msj, setMsj] = useState(null)


    const setName = (e) => {
        setUsuario(e.target.value)
    }
    const setPassword = (e) => {
        setPass(e.target.value)
    }

    const validateCamps = () => {
        if (!pass || !usuario) {
            alertify.error("Por favor llene todos los campos")
            setRestrict(false)
            return;
        }
        if (pass.length < 10) {
            alertify.error('La contraseña es muy corta minimo 10 caracteres')
            setRestrict(false)
            return;
        }

        setRestrict(true)

    }
    const userRegister = (event) => {
        event.preventDefault()
        if (restrict === false) {
            return
        }
        console.log(usuario)
        console.log(pass)
        setData(
            JSON.stringify(
            {
                usuario: usuario,
                password: pass
            }
            )
        )
        console.log(data)
        fetch(ApiUri + "/register", {
            method: "POST",
            headers: { "Content-Type": 'application/json' },
            body:data
        }).then(res => res.json())
            .then(data => setMsj(data))
            .catch((error) => console.log(error))

        if (error === true) {
            alertify.error("hubo un error al realizar la peticion")
            return;
        }
        console.log(msj)
        if (msj?.msj) {
            alertify.success(msj.msj)
            setUsuario(null)
            setPass(null)
            document.getElementById("usuario").value=null
            document.getElementById("password").value=null
            return
        }
        if(msj?.error){
            alertify.error(msj.error)
            setUsuario(null)
            setPass(null)
            document.getElementById("usuario").value=null
            document.getElementById("password").value=null
            return
        }
        alertify.error("noooo")
        
        setMsj(null)
        
    }

    return (
        <div className="complete">
            <div className="form-login">
                <form onSubmit={userRegister}>
                    <h2>Registrase</h2>
                    <label for="usuario">INGRESE SU NOMBRE DE USUARIO</label>
                    <input onChange={setName} id="usuario" type="text" required />
                    <label for="password">INGRESE SU CONTRASEÑA</label>
                    <input onChange={setPassword} id="password" type="password" required />
                    <input onClick={validateCamps} className="botton-login" type="submit" value="Ingresar" />
                    <a href="/login">Ya tienes cuenta</a>
                </form>
                <button onClick={() => localStorage.removeItem("registros")} > remove localStorage </button>

            </div>
        </div>
    );
}

export default Register;