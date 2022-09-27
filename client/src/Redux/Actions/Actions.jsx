import axios from 'axios'
import { ADD_OPS, DELETE_OPS, GET_ENTRYS_Y_EGRESS, GET_LAST_TEN, GET_TOTAL_BALANCE, GET_UNIQUE_OPS, UPDATE_OPS } from './Actiontypes'

const url = "http://localhost:8888/api/auth"

export const getTotalBalance=()=>{
    return async function(dispatch){
        const totalOPS = await axios.get(`${url}/totalOps`)
        
        // console.log(totalOPS.data.currentBalance)
        return dispatch({
            type:GET_TOTAL_BALANCE,
            payload: totalOPS.data.currentBalance
        })   
    }
}

export const getTopTen=()=>{
    return async function(dispatch){
        const lastTen = await axios.get(`${url}/operation`)
        // console.log(lastTen.data.topTEN)
        return dispatch({
            type: GET_LAST_TEN,
            payload: lastTen.data.topTEN
        })
    }
}

export const getEntrysYEgress=()=>{
    return async function(dispatch){
        const entrysOps = await axios.get(`${url}/operation`)
        return dispatch({
            type:GET_ENTRYS_Y_EGRESS,
            payload: entrysOps.data
        })
    }
}


export const addOps=(data)=>{
    return async function(dispatch){
        await axios.post(`${url}/operation`, data)
        return dispatch({
            type:ADD_OPS
        })
    }
}
export const deleteOps=(id)=>{
    return async function(dispatch){
        await axios.delete(`${url}/operation/${id}`)
        return dispatch({
            type: DELETE_OPS
        })
    }
}
export const getUniqueOp=(id)=>{
    return async function(dispatch){
        const uniqueOps = await axios.get(`${url}/operation/${id}`)
        return dispatch({
            type: GET_UNIQUE_OPS,
            payload: uniqueOps.data
        })
    }
}
export const updateOps=(id, data)=>{
    return async function(dispatch){
        await axios.put(`${url}/operation/${id}`, data)
        return dispatch({
            type: UPDATE_OPS
        })
    }
}