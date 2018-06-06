import React, { Component } from 'react';
import fb from '../store/firebase';
import * as firebase from 'firebase';
import history from '../History';
import { Button } from 'reactstrap';
import {handleClose,Signinstatus,Errorcatch,CurrentuserDetails} from '../store/action/index';
import {connect} from 'react-redux';
import Alert from './alertbox';
import '.././App.css';

class Facebooklogin extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        

        // }
        this.login = this.login.bind(this);
    }

    componentDidMount() {
        fb.auth().onAuthStateChanged(user => {
          if (user) {
            console.log(user,'user');
            var userinfo={
              uid:user.uid,
              name:user.displayName,
              imageurl:user.photoURL,
              email:user.email,
              contact:user.identifierNumber
            };
            this.props.CurrentuserDetails(userinfo);
            history.push('/viewadds');
          }
        });
      }
      componentWillReceiveProps(nextProps){
       
        }

      login() {
        var provider = new firebase.auth.FacebookAuthProvider();   
       
        fb.auth().signInWithPopup(provider)
          .then(result => {
            console.log(result.user,'ajao');
         

          }).catch((error)=>{
            // this.props.Errorcatch(error.message);
          })
      }


    render() {
        return (<span>
          {/* {
            (this.state.alert) ?
             (<Alert open={this.state.alert} handleClose={this.props.handleClose()}  message={this.state.errormessage}/>   ) : ''}
            */}
     <button  onClick={this.login}   className="social-signin facebook" >Log in with facebook </button>

               </span> 
        
        )
    }
}
function mapstatetoprops(state){
  return{
      Logindetails:state.login
  }
}
function mapdispatchtoprops(dispatch){
  return{
     
      handleClose:()=>{
          dispatch(handleClose());
      },
      Signinstatus:(mes)=>{
        dispatch(Signinstatus(mes))
      },
      Errorcatch:(mes)=>{
        dispatch(Errorcatch(mes));
      },CurrentuserDetails:(userinfo)=>{
        dispatch(CurrentuserDetails(userinfo));
      }
  }
}

export default connect(mapstatetoprops,mapdispatchtoprops)(Facebooklogin);