import { combineReducers } from 'redux';
import { SUBMIT_LOGIN_FORM } from "../constants/action-types";
import  TableData  from './TableData';
const tableListData = TableData();

const initialState = {
    data: [],
    tableListData: tableListData
  };
const rootReducer = (state = initialState, action) => {
    // if(action.type === SUBMIT_LOGIN_FORM){
    //     const data = action.payload;
    //     return  {...state,
    //         data: [...state.data,data] // state.data.concat(action.payload)
    //     }  
    // }
    // return state;
    switch(action.type){
        case SUBMIT_LOGIN_FORM:{
            return {
                data: [...state.data,action.payload]
            }
        }
        default:{
            return state;
        }
    }
}

export default combineReducers({
    data: rootReducer
});