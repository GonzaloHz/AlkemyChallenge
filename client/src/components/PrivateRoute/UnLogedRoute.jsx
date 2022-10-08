import React from 'react';
import {Navigate} from "react-router"

const UnLogedRoute=({children, redirectTo="/home"})=>{
    const user = localStorage.getItem('users')
    if(user){
        return  <Navigate to={redirectTo}/>
    }
    return children
}

export default UnLogedRoute;