import axios from 'axios';
import { URLLogin} from '../helpers/ApiURL'


export const serviceLogin = async(credentials)=>{
    const { data } = await axios.post(URLLogin, credentials)
    return data;
}

export default serviceLogin;