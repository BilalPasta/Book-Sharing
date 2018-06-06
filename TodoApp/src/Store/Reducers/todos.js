import { stat } from "fs";

const INITIAL_STATE = {
    todos: [],
    inputValue: "",
    flag: false
}

export default function todos(state=INITIAL_STATE,action){
    switch(action.type){
        case 'GETTODOS':
  
      return ({
        ...state,
        todos: action.payload
    })
     case 'ADDTODOS':
     let list=state.slice(0);
    list.push(action.payload);
    return ({
        ...state,
        todos: list
    })
     case 'DELETETODO':
     console.log('come');
    let  dellist=state.slice(0);
      dellist=action.payload;
      console.log(dellist+'del');
      return ({
        ...state,
        todos: dellist
    })
     default:
     return ({
        ...state
    })
    }
     return state;
 }