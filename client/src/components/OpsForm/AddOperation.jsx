import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addOps } from '../../Redux/Actions/Actions';
import { Validate } from './ValidateFunction';
import OpsForm from './OpsForm';


function AddOperation() {

    const user = JSON.parse(localStorage.getItem('users'))

    const dispatch= useDispatch()
    const [
        // error
        , setError] = useState({});
    const [input, setInput]=useState({
        Name:"",
        Concept:"",
        Date:"",
        Total:0,
        Type:"",
        id:user.userLoged.id
    });

    // console.log(user.userLoged.id)
    // console.log(input)
  
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
    const handleSubmit = (e)=>{
      e.preventDefault()
      // console.log(input)
      dispatch(addOps(input, user.userLoged.id))
      // console.log("LOGRADO")
      setInput({
        Name:"",
        Concept:"",
        Date:"",
        Total:0,
        Type:""
    })
    }

    return (
        <div>
            <h2>Add some operation</h2>
            <OpsForm handleSubmit={handleSubmit} handleChangeName={handleChangeName} input={input} updatedOps={false} />
        </div>
    );
}

export default AddOperation;