

import React,{Component} from 'react';
const defaultState = {
    allMessages : [],
};

export function ALLMESSAGES(state = defaultState, action) {
    switch (action.type) {
        case 'GET_USER_MESSAGES':
        console.log('bilal pasta ',action.userMessagesArray);
            return {
                ...state,
                allMessages: [...action.userMessagesArray],
            };
  

        default:
            return state;
    };
};





var initial_state={
    fuid:'',
    Profileimageurl:'',
    messages:[],
    recipientname:''}

var initial_state_for_notify={
noticationMessage:[]
}
export function NotificationMes(state=initial_state_for_notify,action){
    console.log(action,'lllllllllllllllllll');
    switch(action.type){
case 'NOTICATIONMESSAGE':

return{...state,noticationMessage:action.message}
default:
return state;
    }
    return  state;

}
export function CONVERSATION(state=initial_state,action){
   let usermessages=[]; 
switch(action.type){
    case 'CONVERSATION':
action.messages.forEach((obj,index)=>{
    if(obj.recipientuid==action.fuid||obj.senderuid==action.fuid){
      
    if(obj.senderuid==action.fuid){
        
        obj.type=0;
        obj.Profileimageurl=action.Profileimageurl;  }
    else{
        obj.type=1;
        obj.Profileimageurl=action.Profileimageurl2; }

        if(obj.postdetails!=null&&typeof(obj.message)=="string"){

            obj.message=<span><img style={{borderRadius:'2px 2px 2px 2px'}} src={obj.postdetails.BookUrl}/><br/>{obj.message}</span>
        }
      usermessages.push(obj);
      console.log(action,'action');
  



}
})
    return {...state,fuid:action.fuid,messages:usermessages,Profileimageurl:action.Profileimageurl,recipientname:action.recipientname};

    default:
    return state;
}
return state;
}
