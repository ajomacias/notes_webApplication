import UseAuth from "./UseAuth";
import Header from "../layout/Header"

const Private = ({children})=>{
    const auth = UseAuth()
    const verify = auth.isLogged()
    if(!verify){
        window.location.href="/login"
        return;
    }
    return(
        <>
        <Header />
        {children}
        </>
    )
}

export default Private;