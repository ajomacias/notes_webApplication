import { createContext } from "react";
import { ApiUri } from "../helpers/ApiUri";
import axios from "axios";
import alertify from "alertifyjs"

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const contextValue = {
        async login() {
            let us = document.getElementById("usuario").value;
            let pass = document.getElementById("password").value;

            if (!pass) {
                alertify.warning("por favor llene todos los campos")
                return;
            }
            if (!us) {
                alertify.warning("por favor llene todos los campos")
                return;
            }

            const data = {
                usuario: us,
                password: pass
            }
            let msj;
            let uri = `${ApiUri}/login`
            try {
                msj = await axios({
                    method: "POST",
                    url: uri,
                    data: data
                })

            } catch (error) {

                if (error.response?.data) {
                    alertify.warning(error.response.data.error)
                    return;
                }
                alertify.warning("Ups hubo problemas al conectarse al servidor :(")
                return
            }
            alertify.success(msj.data.msj)
            window.localStorage.setItem("session", JSON.stringify(msj.data))
            window.location.href = "/"
        },
        logout() {
            window.localStorage.removeItem("session");
            window.location.href = "/login"
        },
        isLogged() {
            let session = window.localStorage.getItem("session")
            return session
                ? true
                : false
        },
        getUser() {
            let user = window.localStorage.getItem("session")
            user = JSON.parse(user);
            return user
        }
    }
    return (
        <>
            <AuthContext.Provider value={contextValue} >
                {children}
            </AuthContext.Provider >
        </>
    )
}

export default AuthProvider;