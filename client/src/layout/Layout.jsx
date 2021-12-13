import React, { Fragment } from 'react'
import Header from './Header';

const Layout = ({children}) => {
    const url = window.location.pathname
    console.log(url)
    if(url === "/register" || url === "/login"){
        return(
            <Fragment>
                {children}
            </Fragment>
        )
    }
    return(
        <Fragment>
            <Header />
            {children}
        </Fragment>
    )
    
       
    
}

export default Layout;