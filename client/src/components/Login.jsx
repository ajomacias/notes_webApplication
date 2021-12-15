import { Link } from "react-router-dom";
import UseAuth from "../auth/UseAuth";

const Login = ()=>{

    const auth = UseAuth()

    const handleLogin = (e) => {
        e.preventDefault()
        auth.login()
    }
    
    
    return(
        <div>
            <div className="complete">
        <div className="form-login">
            <form onSubmit={handleLogin}>
                <h2>login</h2>
            <label for="usuario">INGRESE SU NOMBRE DE USUARIO</label>
            <input id="usuario" type="text" required />
            <label for="password">INGRESE SU CONTRASEÑA</label>
            <input id="password" name="password"  type="password" required />
            <input className="botton-login" type="submit" value="Ingresar" />
            <Link to="/register">No tienes cuenta</Link>
            </form>
        </div>
    </div>
        </div>
    );
}

export default Login;