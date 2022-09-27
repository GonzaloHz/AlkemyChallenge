import React from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import "./OperationTable.module.css"
import { useDispatch } from 'react-redux';
import { deleteOps } from '../../Redux/Actions/Actions';



function OperationTable(Array) {

    const dispatch = useDispatch()
    
    function handleClickOnThrash (myId){
        console.log(myId)
        dispatch(deleteOps(myId))
    }
    return (
        <div>
            <table className="table table-dark table-striped-columns">
                <thead className="table-dark">
                    <tr
                    //  id="miTablaPersonalizada" 
                     className="table-active">
                        <td><CloseOutlinedIcon/></td>
                        <td className="table-active">Id</td>
                        <td>Name</td>
                        <td>Date</td>
                        <td>Total</td>
                        <td>Type</td> 
                        <td><EditOutlinedIcon/></td>
                    </tr>
                </thead>
            </table>
            {Array.Array.length>0 && Array.Array.map(one=>(
                <table className="table table-stripped" key={one.id}>
                    <tbody>
                        <tr className={one.Type==="Entry"?"table-success":"table-danger"}>
                            <td><CloseOutlinedIcon onClick={()=>handleClickOnThrash(one.id)}/></td>
                            <td>{one.id}</td>
                            <td>{one.Name}</td>
                            <td>{one.Date}</td>
                            <td>{one.Total}</td>
                            <td>{one.Type}</td>
                            <td><EditOutlinedIcon/></td>
                        </tr>
                    </tbody>
                </table>
            ))}
        </div>
    );
}

export default OperationTable;