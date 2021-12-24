import { Navigate } from "react-router-dom";
import UseAuth from "../auth/UseAuth"
const Public = ({children})=>{
    const auth = UseAuth()
    const verify = auth.isLogged();
    return verify
    ?<Navigate to="/"/>
    :(
        <>
        {children}
        </>
    )

}
export default Public;