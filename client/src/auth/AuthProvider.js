import { createContext, useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext()

const AuthProvider = ({children}) =>{

    const contextValue = {
        login(){
            let user = {id:1,usuario:"Anderpro"}
            window.location.href = "/"
            window.localStorage.setItem("session",JSON.stringify(user))
        },
        logout(){
            window.localStorage.removeItem("session");
            return(
                <Navigate to="/login" />
            )
        },
        isLogged(){
            let session = window.localStorage.getItem("session")
            return session
            ?true
            :false
        },
        getUser(){
            let user = window.localStorage.getItem("session")
            user = JSON.parse(user);
            return user
        }
    }
    return(
        <>
    <AuthContext.Provider value={contextValue} >
        {children}
    </AuthContext.Provider >
    </>
    )
}

export default AuthProvider;