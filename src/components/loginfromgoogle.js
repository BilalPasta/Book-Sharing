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
import './signin.css';
import Google from './images/gmail.png';


import {startGetUserMessages} from '../store/action/messages';
import email from './images/gmail.png';
import facebook from './images/facebook.png';
import Bounce from 'react-reveal/Bounce' 

class Googlelogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          OpenContactDialog:false
        }
        this.login = this.login.bind(this);
        this.foralert=this.foralert.bind(this);
        // this.handleclose=this.handleclose.bind(this);


    }
componentWillReceiveProps(nextProps){
  this.props=nextProps;
}

    componentWillMount() {
        fb.auth().onAuthStateChanged(user => {
          if (user) {
            console.log(user,'userinfo');
            var userinfo={
              uid:user.uid,
              name:user.displayName,
              imageurl:user.photoURL,
              email:user.email,
              contact:user.identifierNumber
            };
            this.props.SigninStatus();
            this.props.CurrentuserDetails(userinfo);
            // this.props.startGetAllUsersAction(user.uid);
    //  this.props.startGetUserMessages(user.uid);
            history.push('/viewadds');
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
     
        return (
     <div>
           
            
                {/* <button   color="secondary" size="sm"  className="social-signin google"  ><img src={Google}/></button>   */}
                <button onClick={this.login} className="hvr-pulse btnlog"  >
						<img src={Google} alt="GOOGLE"/>
                      
						
					</button>
            </div>
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