import React, { Component } from 'react';
import fb from '../store/firebase';
import * as firebase from 'firebase';
import history from '../History';
import { Button } from 'reactstrap';
import {handleClose,Signinstatus,Errorcatch,CurrentuserDetails,SigninStatus} from '../store/action/index';
import {startGetAllUsersAction} from '../store/action/users';
import {connect} from 'react-redux';
import Alert from './alertbox';
import '.././App.css';
import {startGetUserMessages} from '../store/action/messages';


class Googlelogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
        this.login = this.login.bind(this);
        this.foralert=this.foralert.bind(this);
    }
componentWillReceiveProps(nextProps){
  this.props=nextProps;
}
    componentWillMount() {
        fb.auth().onAuthStateChanged(user => {
          if (user) {
            console.log(user);
            var userinfo={
              uid:user.uid,
              name:user.displayName,
              imageurl:user.photoURL,
              email:user.email,
              contact:user.identifierNumber
            };
            this.props.SigninStatus();
            this.props.CurrentuserDetails(userinfo);
            this.props.startGetAllUsersAction(user.uid);
     this.props.startGetUserMessages(user.uid);
// console.log('')
            history.push('/viewadds');
            // this.foralert();
            console.log(this.state,'state',this.props);
          }
        });
      }
      

    
       foralert(){
         console.log('chl ja');

        }
      login() {
        var provider = new firebase.auth.GoogleAuthProvider();
        
        
        fb.auth().signInWithPopup(provider)
          .then(result => {
            console.log(result.user,'userinfo');
           
            // console.log(userinfo,'bilal');

// this.props.CurrentuserDetails(userinfo);
            // this.props.Signinstatus("SignIn Successfully");
          }).catch((error)=>{
            // this.props.Errorcatch(error.message);
          })

      }


    render() {
      console.log('login',this.props.Logindetails);
      console.log(this.props.Currentuser);
        return (
     
           
            
                <button  onClick={this.login} color="secondary" size="sm"  className="social-signin google">Log in with Google+ </button>  
               
                
            
        )
    }
}

function mapstatetoprops(state){
  return{
      Logindetails:state.login,
      Currentuser:state.CurrentUser
  }
}
function mapdispatchtoprops(dispatch){
  return{
     
      handleClose:()=>{
          dispatch(handleClose());
      },
      Signinstatus:(mes)=>{
        dispatch(Signinstatus(mes))
      }, Errorcatch:(mes)=>{
        dispatch(Errorcatch(mes));
      },CurrentuserDetails:(userinfo)=>{
        dispatch(CurrentuserDetails(userinfo))
      },
      startGetAllUsersAction:(uid)=>{
        dispatch(startGetAllUsersAction(uid))
      },
      startGetUserMessages:(uid)=>{
        dispatch(startGetUserMessages(uid))
      },SigninStatus:(mes)=>{
        dispatch(SigninStatus(mes));
      }
  }
}

export default connect(mapstatetoprops,mapdispatchtoprops)(Googlelogin);