import React, { useState } from "react";
import { Navigate } from "react-router-dom"
import '../styles/register.css';

const Register = ()=>{
    const [pass,setPass]= useState(null)
    const [usuario, setUsuario] = useState(null)
    const [restrict, setRestrict] = useState(false);
    const [data, setData] = useState(null)


    const setName = (e)=>{
        setUsuario(e.target.value)
        console.log(usuario)
    }
    const setPassword = (e)=>{
        setPass(e.target.value)
        console.log(pass)
    }

    const validateCamps = ()=>{
        if(!pass || !usuario){
            alert("Por favor llene los campos")
            setRestrict(false)
            
            return;
        }
        if(pass.length < 10){
            alert("La contraseña es muy corta minimo 10 caracteres")
            setRestrict(false)
            return;
        }
        setRestrict(true)

    }
    const userRegister = (event)=>{
        event.preventDefault()
        if(restrict===false){
        return
        }
        setData([
            {
                user:usuario,
                pass:pa
            }
        ])
        let users = window.localStorage.getItem("registros")
        if(!users){
            window.localStorage.setItem("registros",JSON.stringify(da));
            alert("Usuario ingresado correctamente")
            window.location.reload()
            return;
        }
        



    }
    
    return(
        <div className  ="complete">
        <div className  ="form-login">
            <form onSubmit={userRegister}>
            <h2>Registrase</h2>
            <label for="usuario">INGRESE SU NOMBRE DE USUARIO</label>
            <input onChange={setName} id="usuario" type="text" required/>
            <label for="password">INGRESE SU CONTRASEÑA</label>
            <input onChange={setPassword} id="password"  type="password" required/>
            <input onClick={validateCamps} className="botton-login" type="submit"  value="Ingresar"/>
            <a href="/login">Ya tienes cuenta</a>
            </form>
           
        </div>
    </div>
    );
}

export default Register;