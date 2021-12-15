import React from "react";
import { NavLink } from "react-router-dom"
import '../styles/header.css';
import logo from "../images/logo/logo.png"
import UseAuth from "../auth/UseAuth";
const Header = () => {
    const auth = UseAuth()
    return (
        <div className="div-complete-pages">
            <header>
                <nav>
                    <ul className="nav">
                        <li className="li-nav-logo">
                            <NavLink to="/"> <img className="img-nav" src={logo} alt="" /></NavLink>
                        </li>
                        <NavLink to="/">
                            <h2 className="h2-nav">NotesAnder</h2>  
                        </NavLink>
                        <li className="li-nav-logo">
                           <NavLink  to="/"></NavLink>
                        </li>
                        <div className="div-items">
                            <li className="li-nav-items">
                               <NavLink to="/">Inicio</NavLink>
                            </li>
                            <li className="li-nav-items">
                               <NavLink  to="/ayuda">Ayuda</NavLink>
                            </li>
                            <li className="li-nav-items">
                               <NavLink  to="sobreMi">Sobre mi</NavLink>
                            </li>
                            <li className="li-nav-items">
                               <a href="/login">Iniciar sesion</a>
                            </li>
                            <button onClick={auth.logout} >Logout</button>
                        </div>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;