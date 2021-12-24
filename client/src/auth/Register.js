import { ApiUri } from "../helpers/ApiUri"
import alertify from "alertifyjs"
import axios from "axios"

function validateName() {
    let us = document.getElementById("usuario").value;
    return us
}

function validatePass() {
    let pass = document.getElementById("password").value;
    if (pass.length < 10) {
        return null

    }
    return pass
}

async function sendForm(e) {
    e.preventDefault()
    let name = validateName()
    if (!name) {
        alertify.warning("El usuario vale ya existe")
        return

    }
    let pass = validatePass()

    if (!pass) {
        alertify.warning("La contraseña debe tener minimo 10 caracteres")
        return
    }
    const data = {
        usuario: name,
        password: pass
    }
    let msj;

    try {
        msj = await axios({
            method: "POST",
            url: ApiUri + "/register",
            data: data
        })
    } catch (error) {
        if (error.response?.data) {
            alertify.warning(error.response.data.error)
            return
        }
        alertify.warning("Ups hubo un problema al conectarse al servidor :(")
        return
    }
    alertify.success(msj.data.msj)
}

export default sendForm;