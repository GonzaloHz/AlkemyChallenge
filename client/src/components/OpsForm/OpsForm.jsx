import React from 'react';

function OpsForm({handleSubmit, handleChangeName, input, updatedOps}) {
    // console.log(input)
    return (
        <form onSubmit={(e)=>handleSubmit(e)}>
        <label className="form-control">Name</label>
        <input name="Name" value={input.Name} placeholder="Enter the operation's name" onChange={(e)=>handleChangeName(e)}/>
        <label className="form-control">Description</label>
        <input name="Concept" value={input.Concept} placeholder="Enter the description" onChange={(e)=>handleChangeName(e)}/>
        <label className="form-control">Date</label>
        <input name="Date" value={input.Date} placeholder="DD/MM/YYYY" onChange={(e)=>handleChangeName(e)}/>
        <label className="form-control">Amount</label>
        <input name="Total" value={input.Total} onChange={(e)=>handleChangeName(e)}/>
        <label className="form-control">Type</label>
        <input name="Type" value={input.Type} placeholder="Entry or Egress" onChange={(e)=>handleChangeName(e)}/>
        {updatedOps?
        <button>Update Operation</button>:
        <button type="submit">Add Operation</button>
        }
        </form>
    );
}

export default OpsForm;