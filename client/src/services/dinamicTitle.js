function titleDinamic (){

    let lo = "http://localhost:3000"
    let url = document.URL
    let title = document.getElementById("title")
    switch (url) {
        case `${lo}/`:
            title.innerText = "NotesAnder  |  Inicio"
            break;
        case `${lo}/login`:
            title.innerText = "NotesAnder  |  Login"
            break;
        case `${lo}/register`:
            title.innerText = "NotesAnder  |  Registro"
            break;
        case `${lo}/about`:
            title.innerText = "NotesAnder  |  About"
            break;
        default:
            title.innerText = "NotesAnder"
    }
}


export default titleDinamic;