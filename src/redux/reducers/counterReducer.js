import React from "react"  
import { actionTypes } from "../action/actionTypes"
const initialState={
    counter:1000,
}
export const counterReducer = (state = initialState,action) =>{
if(action.type === actionTypes.INCREMENT){
    return{
        ...state,
        counter:state.counter+1,
    }
}else if(action.type === actionTypes.DECREMENT){
    return{
        ...state,
        counter:state.counter-1,
    }
}else if(action.type === actionTypes.RESET){
    return{
        ...state,
        counter:0
    }
}else{
    return state;
}
}