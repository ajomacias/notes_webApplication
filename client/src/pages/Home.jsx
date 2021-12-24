import React, { useState, useEffect } from 'react';
import { ApiUri } from '../helpers/ApiUri';
import titleDinamic from '../services/dinamicTitle';

const Home = () =>{
    const [notes,setNotes] = useState([])
    const fetchNotes = (url)=>{
        fetch(url+"/getNotes")
        .then(res=>res.json())
        .then(data=>setNotes(data))
        .catch(error=>console.log(error))

    }
    useEffect(() => {
       fetchNotes(ApiUri);
    }, [])
    useEffect(() => {
        titleDinamic()
     }, [])

    return(
        <div className="complete-home">
            <div className="div-izq-mtd">
                home
            </div>
        </div>
    );
}

export default Home;