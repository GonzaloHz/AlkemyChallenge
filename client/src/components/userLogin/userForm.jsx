import React from 'react';
import { useDispatch } from 'react-redux';
import { ValidateUser } from './validate';

const UserForm = ({functionProps, input, setInput, setError, kindOfAction}) => {

    const dispatch = useDispatch()

    const handleOnChange=(e)=>{
        e.preventDefault();
        // console.log(input)
            setInput(input=>{
                const newState={
                ...input,
                [e.target.name]:e.target.value
                }
            setError(ValidateUser(newState, kindOfAction))
            return newState}
            )
    }

    const handleOnLoggin=(e)=>{
        e.preventDefault()
        dispatch(functionProps(input))
        console.log(input)
    }

    return (
        <div>
            <div> 
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
            </div>
            <form onSubmit={(e)=>handleOnLoggin(e)}>
            <div /*forms */>
                {kindOfAction==="addUser"&&<div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>
                </span>
                <input onChange={(e)=>handleOnChange(e)} name='name' type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
                </div>}  
                <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">@</span>
                <input onChange={(e)=>handleOnChange(e)} name='email' type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping"/>
                </div>  
                {/* second item*/}
                <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                    </svg> 
                </span>
                <input onChange={(e)=>handleOnChange(e)} name="password" type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping"/>
                </div>  
            </div>
            <div>
                Forgot password?
            </div>
            <button type="submit" className="btn btn-outline-dark">{kindOfAction==="addUser"?"Register":"Login"}</button>
            </form>
        </div>
    );
}

export default UserForm;