import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { addUser } from '../../Redux/Actions/Actions';
import UserForm from './userForm';

function UserRegister() {

    const [ input, setInput ] = useState({
        name:"",
        password:"",
        email:""
    })

    const [
        // error
        , setError] = useState({});

    return (
        <div>
            <Link className="navbar-brand" to="/">Go Back</Link>
            <UserForm input={input} setInput={setInput} setError={setError} functionProps={addUser} kindOfAction={"addUser"}/>
        </div>
    );
}
export default UserRegister;