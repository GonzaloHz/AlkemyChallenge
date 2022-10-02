import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const navigate=useNavigate()

    const handleOnLogin=()=>{
        navigate("/login")
    }

    const handleOnSignUp=()=>{
        navigate("/registeruser")
    }

    return (
        <div>
            <h1>Welcome to Personal Balance App</h1>
            <div>
                <button onClick={()=>handleOnLogin()}>Login</button>
                <button onClick={()=>handleOnSignUp()}>Sign Up</button>
            </div>
        </div>
    );
}

export default LandingPage;