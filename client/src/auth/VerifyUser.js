import UseAuth from "./UseAuth";

const Private = ({children})=>{
    const auth = UseAuth()
    
    return auth.isLogged()
    ?(
        <> {children} </>
    )
    :window.location.href="/login"
}

export default Private;