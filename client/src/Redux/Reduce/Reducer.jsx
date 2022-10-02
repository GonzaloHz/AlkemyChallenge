import { GET_LAST_TEN, GET_TOTAL_BALANCE, GET_ENTRYS_Y_EGRESS, GET_UNIQUE_OPS } from "../Actions/Actiontypes";

const initialState={
    total:0,
    topTen:{},
    entryOPS:{},
    egressOPS:{},
    allOPS:{},
    uniqueOp:{}
};


const rootReducer=(state=initialState, action)=>{
    switch(action.type){
        case GET_TOTAL_BALANCE:
            // console.log(action.payload)
            return{
                ...state,
                total: action.payload
        }
        case GET_LAST_TEN:
            return{
                ...state,
                topTen: action.payload
        }
        case GET_ENTRYS_Y_EGRESS:
            return{
                ...state,
                entryOPS: action.payload.entryOPS,
                egressOPS: action.payload.egressOPS,
                allOPS: action.payload.ALLOPERATIONS
            }
        case GET_UNIQUE_OPS:
            return{
                ...state,
                uniqueOp: action.payload
            }
        default:return {
            ...state
        }
    }
}

export default rootReducer;