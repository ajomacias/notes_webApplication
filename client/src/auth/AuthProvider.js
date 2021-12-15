import { createContext, useState } from "react";

export const AuthContext = createContext()

const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null)

    const contextValue = {
        user,
        login(){
            setUser({id:1,usuario:"Anderpro"})
            window.localStorage.setItem("session",JSON.stringify(user));
        },
        logout(){
            window.localStorage.removeItem("session");
            setUser(null)
        },
        isLogged(){
            const session = window.localStorage.getItem("session")
            return !!session
            ?true
            :false
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