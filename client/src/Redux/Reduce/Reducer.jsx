import { GET_LAST_TEN, GET_TOTAL_BALANCE } from "../Actions/Actiontypes";

const initialState={
    total:0,
    topTen:{}
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
        default:return {
            ...state
        }
    }
}

export default rootReducer;