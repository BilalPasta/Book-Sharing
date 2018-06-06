
import React, {Component} from 'react';
import '.././App.css';
// import { Container, Row, Col } from 'reactstrap';
import {deepPurple500,cyan900  ,red500, yellow500, blue500,indigo900,grey50} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import { Button } from 'reactstrap';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import SvgIcon from 'material-ui/SvgIcon';
import RaisedButton from 'material-ui/RaisedButton';
import fb from '../store/firebase';
import {connect} from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Profile from './uploadfile';
import LinearProgress from 'material-ui/LinearProgress';
import {Getmessagelist} from '../store/action/index';

let  messagobj;
const style = {
    margin: 12,
    backgroundColor:cyan900
  };
  const styles = {
    underlineStyle: {
        borderColor: indigo900, color: indigo900
    },
    floatingLabelFocusStyle: {
        color: indigo900,

    }
}





      const customContentStyle = {
        width: '95%',
        maxWidth: 'none',
        height:'80%'
      };

class  Message extends React.Component{
    constructor(props){
        super(props);
     
        // this.props.Getmessagelist();
this.state={
msg:'',
obj:this.props.obj

}

this.Change=this.Change.bind(this);
this.Submit=this.Submit.bind(this);
    }
    componentWillReceiveProps(nextProps){
this.props=nextProps;
this.setState({
obj:nextProps.obj
})
    }

    Change(event){
        this.setState({[event.target.name]:event.target.value});
        
                  }
                 
      Submit(){
          if(this.state.obj!=null){
      messagobj={
            recipientuid:this.state.obj.userdetails.uid,
            senderuid:this.props.CurrentUser.uid,
      message:this.state.msg,
    postdetails:this.state.obj}

// messagobj.message=JSON.stringify(messagobj.message)

        // console.log(this.state.obj,'ooooooooooooooooooooooooooooobbbbbbbbbbbbbbbbbbbbjjjjjjjjjjjjjjjjj')
;          


fb.database().ref('/').child('messages').push(messagobj).then((abc)=>{
    this.props.handleClose();
  })
  console.log(messagobj,'messagobj');
}
}


    render(){
        const actions = [
            <RaisedButton
              label="Cancel"
              disabled={false}
              onClick={this.props.handleClose}
              labelStyle={{fontSize:'10px'}}  style={{height:'25px',marginRight:'2px'}} backgroundColor={indigo900} labelColor={grey50} 
            />,


            <RaisedButton
              label="Send"
         onClick={this.Submit}
         disabled={this.state.msg ?(false):(true)}
              labelStyle={{fontSize:'10px'}}  style={{height:'25px'}} backgroundColor={indigo900} labelColor={grey50}
            />,
          ];
        return(
  <div className="drawer1">

             <Dialog
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.props.handleClose}
          autoScrollBodyContent={true}
          contentStyle={customContentStyle}

          >

        <center>
                <TextField
                 floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                 onChange={this.Change}
                 name="msg"
                 underlineFocusStyle={styles.underlineStyle}
                  type="text"
                  style={{width:'80%'}}
                   floatingLabelText="Message" 
                   />




            </center>

            </Dialog>
          </div>)
    }
}

function mapstatetoprops(state){
  return{
    CurrentUser:state.CurrentUser,
    allmessages:state.allmessages   
  }
}
function mapdispatchtoprops(dispatch){
    return{
        Getmessagelist:()=>{
            dispatch(Getmessagelist())
        }
    }
}

export default connect(mapstatetoprops,mapdispatchtoprops)(Message);




