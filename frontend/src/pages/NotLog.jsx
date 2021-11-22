import React from "react";

const NotLog = ()=>{
    return(
        <div className="complete">
        <div className="not-logger">
        <h1>OPS</h1>
        <p>Parece que no has iniciado sesion</p>
        <a href="/login">Iniciar sesion</a>
    </div>
    </div>
    );
}

export default NotLog;