import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../../Redux/Actions/Actions';
import UserForm from './userForm';

function UserLogin() {

    const [ input, setInput ] = useState({
        
        password:"",
        email:""
    })

    const [
        // error
        , setError] = useState({});

    return (
        <div>
            <Link className="navbar-brand" to="/">Go Back</Link>
            <UserForm input={input} setInput={setInput} setError={setError} functionProps={loginUser} kindOfAction={"none"}/>
        </div>
    );
}
export default UserLogin;