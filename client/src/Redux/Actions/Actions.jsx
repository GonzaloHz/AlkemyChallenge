import axios from 'axios'
import { GET_LAST_TEN, GET_TOTAL_BALANCE } from './Actiontypes'

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