import { stat } from "fs";



var initial_state={
    message:'',
    loginstatus:false,
    alert:false

}

export const Auth=(state=initial_state,action)=>{
    switch(action.type){
        case 'SIGNIN':
        console.log(action,'action');
        return{...state,message:action.message,
            loginstatus:action.loginstatus,
            alert:action.alert}
            case 'SET_LOGIN_STATUS':
            return{...state,loginstatus:action.loginstatus}
        case 'ALERT_CLOSE':
        return{...state,alert:action.alert,message:action.message}
        case 'SIGNOUT':
        return{...state,alert:action.alert,message:action.message,loginstatus:action.loginstatus}
        case 'ERROR':
return{...state,alert:action.alert,message:action.message}
        default:
        return state;
    }

    return state;
}
var initial_url={
    url:''
}





export const SignupimageUrl=(state=initial_url,action)=>{
switch(action.type){
    case 'SET_URL':
//userimage url and book url
console.log(action.imageurl,'llllllllllllllllllll')
    return {...state,url:action.imageurl}
default:
return state;
}
return state
}

export const CurrentUser=(state={name:'',imageurl:'',email:'',contact:'',uid:''},action)=>{
    switch(action.type){
        case 'CUREENT_USER':
        console.log(action.payload,'payload1')
        return {...state,uid:action.payload.uid,name:action.payload.name,imageurl:action.payload.imageurl,contact:action.payload.contact,email:action.payload.email}
    default:
    return state;
    }
    return state;
}

