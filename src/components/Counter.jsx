import React, { useEffect } from "react" 
import { useDispatch,useSelector } from "react-redux"
import { increment,decrement,reset } from "../redux/action/action" 
import {store} from "../redux/store"
const Counter = ()=>{  
    const counter = useSelector((state)=>state.counter) 
    const dispatch = useDispatch();
    const handleIncrementClick = () =>{
        dispatch(increment());
    }
    const handleDecrementClick = () =>{
        dispatch(decrement());
    }
    const handleReset = () =>{
        dispatch(reset());
    } 
    useEffect(()=>{
        console.log(store.getState())},[counter])
    
     return(
        <div>
            <h1>Counter : {counter}</h1>
            <button onClick={handleIncrementClick}>INCREMENT</button> 
            <button onClick={handleDecrementClick}>DECREMENT</button> 
            <button onClick={handleReset}>RESET</button>
        </div>
    )
} 
export default Counter;