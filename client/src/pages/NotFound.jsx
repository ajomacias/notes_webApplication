import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../auth/UseAuth';
import titleDinamic from '../services/dinamicTitle';
const NotFound = () => {
  const auth = UseAuth()
  useEffect(() => {
    titleDinamic()
 }, [])
    return (
      <div className="complete">
       <div className="not-logger">
         <h1>404</h1>
         <p>!UPS al parecer esta pagina no existe </p>
         <Link to="/login">Iniciar sesion</Link>
        </div>
      </div>
    );
}

export default NotFound;
