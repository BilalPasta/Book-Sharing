


var initial_state={
    alert:false,
    message:''

}

export const AlertStatus=(state=initial_state,action)=>{
    console.log(state,'state');
    switch(action.type){
        case 'ALERT_OPEN':
        // console.log(action,'action');
        return{...state,alert:action.alert,message:action.message}
        case 'ALERT_CLOSE':
        return{...state,alert:action.alert,message:action.message} 
        default:
        return state;
    }

    return state;
}




// var initial_={
//     allbookdetails:[]
//   }
  
  
  
//   export const completepost=(state=initial_,action)=>{
//       console.log('bilal usman');
//       switch(action.type){
//         case 'ALLPOST':
//   console.log(action.payload,'action');
//   return state;
//   default :
//   return state;
//       }
//       return state;
//   }