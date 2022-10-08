import React from 'react';
import {Navigate} from "react-router"

const PrivateRoute=({children, redirectTo="/"})=>{
    const user = localStorage.getItem('users')
    if(!user){
        return  <Navigate to={redirectTo}/>
    }
    return children
}

export default PrivateRoute;