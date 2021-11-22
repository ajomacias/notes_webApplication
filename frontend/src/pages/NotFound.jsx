import React from 'react';
import '../styles/err.css';

const NotFound = () => {
    return (
      <div className="complete">
       <div className="not-logger">
         <h1>404</h1>
         <p>!UPS al parecer esta pagina no existe </p>
         <a href="/login">Iniciar sesion</a>
        </div>
      </div>
    );
}

export default NotFound;