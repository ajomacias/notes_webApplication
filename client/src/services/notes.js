import axios from "axios";
import {ApiUri}  from "../helpers/ApiUri"

export async function getNotes(){
    let data;
    try{
    data = await axios({
        method:"GET",
        url:`${ApiUri}/getNotes`
    })
}catch(error){
    console.log(error.response)
    return null
}
return data
}