import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUniqueOp, updateOps } from '../../Redux/Actions/Actions';
import OpsForm from './OpsForm';
import { Validate } from '../Validate/ValidateFunction';


function UpdateOps() {

    const dispatch = useDispatch()
    const {id} = useParams()
    console.log(id)
    let uniqueOp = useSelector(state=>state.uniqueOp)
    let [input, setInput]=useState({
        Name: uniqueOp?.Name,
        Concept:uniqueOp?.Concept,
        Date:uniqueOp?.Date,
        Total:uniqueOp?.Total,
        Type:uniqueOp?.Type 
    });

    useEffect(()=>{
        setInput({
            Name: uniqueOp.Name,
            Concept:uniqueOp.Concept,
            Date:uniqueOp.Date,
            Total:uniqueOp.Total,
            Type:uniqueOp.Type 
        })
    },[uniqueOp])
    useEffect(()=>{
        id && dispatch(getUniqueOp(id))
    },[dispatch, id] )
    
    const [
        // error
        , setError] = useState({});
    // console.log(uniqueOp)

    const handleSubmit = (e)=>{
        e.preventDefault()
        // console.log(input)
        dispatch(updateOps(id, input))
        // console.log("LOGRADO")
        setInput({
          Name:"",
          Concept:"",
          Date:"",
          Total:0,
          Type:""
      })
      console.log("finish")
    }
    const handleChangeName = (e) =>{
    console.log(e.target.value)
    setInput(state=>  {      
        const newState={
        ...state,
        [e.target.name]: e.target.value
        }
        setError(Validate(newState))
        return newState
    })
    }

    return (
        <div>
            <h2>Update a operation</h2>
            <OpsForm handleSubmit={handleSubmit} handleChangeName={handleChangeName} input={input}  updatedOps={true}/>
        </div>
    );
}

export default UpdateOps;