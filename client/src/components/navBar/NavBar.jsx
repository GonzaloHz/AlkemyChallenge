import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../Redux/Actions/Actions';

function NavBar() {

    const dispatch = useDispatch();

    const onLogout = ()=>{
        dispatch(logoutUser())
    } 
    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/home">Home</Link>
           
            <Link className="navbar-brand" to="/register">Register</Link>
            <Link className="navbar-brand" to="/addops">Add Operation</Link>
            <Link className="navbar-brand" to="/profile">Profile</Link>
          
            <button className="btn btn-outline-danger" onClick={()=>onLogout()}>Logout</button>
            </div>
        </nav>
    );
}

export default NavBar;