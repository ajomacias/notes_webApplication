import React from "react";
import { NavLink } from "react-router-dom"
import '../styles/header.css';
const Header = () => {
    return (
        <div className="div-complete-pages">
            <header>
                <nav>
                    <ul className="nav">
                        <li className="li-nav-logo">
                            <NavLink className="img-nav" to="/"><img src="../img/logo.png" alt="" /></NavLink>
                        </li>
                        <a href="/">
                            <h2 className="h2-nav">NotesAnder</h2>
                        </a>
                        <li className="li-nav-logo">
                            <a href="/"></a>
                        </li>
                        <div className="div-items">
                            <li className="li-nav-items">
                                <a href="/">Inicio</a>
                            </li>
                            <li className="li-nav-items">
                                <a href="/ayuda">Ayuda</a>
                            </li>
                            <li className="li-nav-items">
                                <a href="sobreMi">Sobre mi</a>
                            </li>
                            <li className="li-nav-items">
                                <a href="/login">Iniciar sesion</a>
                            </li>
                        </div>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;