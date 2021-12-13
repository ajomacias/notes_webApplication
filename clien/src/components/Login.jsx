import { Link } from "react-router-dom";

const Login = ()=>{
    
    return(
        <div>
            <div className="complete">
        <div className="form-login">
            <form action="#" onSubmit={(e)=>{
                console.log(e)
            }}>
                <h2>login</h2>
            <label for="usuario">INGRESE SU NOMBRE DE USUARIO</label>
            <input id="usuario"  name="usuario" type="text" required />
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