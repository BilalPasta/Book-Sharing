import fb from '../firebase';
import store from '../index';
import { CurrentUser } from '../reducers/authentication';
export function login (user){
    return (dispatch)=>{
        fb.auth().signInWithEmailAndPassword(user.email, user.password).then((Currentuser) => {
            // console.log(Currentuser,'userinfo');
      

            dispatch(Signinstatus("Login Successfully"));

            
        }).catch((error) => {
            console.log(error.message);
            
            dispatch(Errorcatch(error.message));

        })
    }
}

export function Errorcatch(mes){
    return{
        type:'ERROR',message:mes,alert:true
    }
}
export function Signinstatus(mes){
    return{
        type:'SIGNIN',loginstatus:true,message:mes,alert:true
    }
}
export function SigninStatus(){
    return{
        type:'SET_LOGIN_STATUS',
        loginstatus:true
    }
}
export function SignOutstatus(mes){
    return{
        type:'SIGNOUT',loginstatus:false,message:mes,alert:true
    }
}


export function setimageurl(imageurl){
    return{
        type:"SET_URL",
        imageurl:imageurl    }


}
export function handleClose(){
return{
     type:'ALERT_CLOSE',alert:false,message:''
 
}};

export function alertopen(msg){
    return{
        type:'ALERT_OPEN',alert:true,message:msg
    }
}

// handleClose = () => {
//     this.setState({ signerror: false,errormessage:'' });
// };

var allpost=[];

export function Getadds(){
    return (dispatch)=>{
        allpost=[];
    fb.database().ref('/').child('Adds').on('child_added',(data)=>{

        var obj=data.val();
        obj.id=data.key;
       
        allpost.push(obj);
        dispatch(getallpost());

    })
    console.log(allpost,'post');

}}

var allmessages=[];
export function Getmessagelist(){
    return(dispatch)=>{
fb.database().ref('/').child('Message').on('value',(data)=>{
let ob=data.val();
allmessages.push(ob);
dispatch(getallmessage());

})
    }
}

export function getallmessage(){
    return{
        type:'ALL_MESSAGES',
        payload:allmessages

    }
}

export function getallpost(){
    return{
        type:'ALLPOST',
        payload:allpost
    }
}

export function booksearch(bookname){
    let found=false;
return(dispatch)=>{
    fb.database().ref('/').child('Adds').on('child_added',(data)=>{
        var obj=data.val();
        obj.id=data.key;
        console.log(bookname,'bookname');
        if(obj.BookName==bookname){
        allpost=[obj];
        dispatch(getallpost());
        found=true;
    }
if(!found){
dispatch(alertopen('Not Found'))
}
}
 

    )



    dispatch(getallpost());

}
}

export function CurrentuserDetails(userinfo){
    console.log(userinfo,'userinfo');
    return{
        type:'CUREENT_USER',
        payload:userinfo
    }
}