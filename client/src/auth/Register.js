import alertify from "alertifyjs"
function validateName(){
    let us = document.getElementById("usuario").value;
    return true
}

function validatePass(){
    let pass = document.getElementById("password").value;
    if(pass.length < 10){
        return false

    }
    return true
}

function sendForm(e){
    e.preventDefault()
    if(!validateName()){
        alertify.warning("El usuario vale ya existe")
        
    }
    if(!validatePass){
        alertify.warning("La contraseña debe tener minimo 10 caracteres")
        return
    }
    alertify.success("ok")
}

export default sendForm;