import {useContext} from 'react'
import { AuthContext } from './AuthProvider'


const UseAuth = () => {
    const contextValue = useContext(AuthContext)
    return contextValue
}

export default UseAuth;
