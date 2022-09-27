import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTopTen, getTotalBalance } from '../../Redux/Actions/Actions';
import ActualFinance from '../OperationForm/OperationTable';

function Home() {

    const dispatch = useDispatch();
    const totalOPS = useSelector(state=>state.total)
    const topTEN = useSelector(state=>state.topTen)

    useEffect(()=>{
        dispatch(getTotalBalance())
        dispatch(getTopTen())
    })
    // console.log(topTEN)
    // console.log(totalOPS)
    // console.log(topTEN.map(one=>one.id))

    return (
        <div>
            <h1>This is your current balance</h1>
            {totalOPS>0?<h2>${totalOPS}.00</h2>:<h2>Loading...</h2>}

            <strong>Register of your last operations</strong>
            <div className="table-responsive">
            <ActualFinance Array={topTEN}/>
            </div>
        </div>
    );
}

export default Home;