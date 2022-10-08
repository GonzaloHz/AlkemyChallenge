import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEntrysYEgress } from '../../Redux/Actions/Actions';
import OperationTable from './OperationTable';

function ActualFinance() {

    const user = JSON.parse(localStorage.getItem('users'))

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getEntrysYEgress(user.userLoged.id))
    })
    const entryOPS =useSelector(state=>state.entryOPS)
    const egressOPS =useSelector(state=>state.egressOPS)
    const allOPS =useSelector(state=>state.allOPS)

    const [btnState, setBtnState] = useState("ALL")

    const handleSucces = () =>{
        setBtnState("ENTRY")
    // console.log(btnState)
    }
    const handleEgress = () =>{
        setBtnState("EGRESS")
    // console.log(btnState)
    }
    const handleAll = () =>{
        setBtnState("ALL")
    // console.log(btnState)
    }

    return (
        <div>
            <h1>Operations' Register</h1>
            <div>
                <button type="button" className="btn btn-outline-success" onClick={()=>handleSucces()}>Entrys</button>
                <button type="button" className="btn btn-outline-light" onClick={()=>handleAll()}>All</button>
                <button type="button" className="btn btn-outline-danger" onClick={()=>handleEgress()}>Egress</button>
            </div>
            <div>
                <OperationTable Array={btnState==="ENTRY"?entryOPS:btnState==="EGRESS"?egressOPS: allOPS} />
            </div>
        </div>
    );
}

export default ActualFinance;