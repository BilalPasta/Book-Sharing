import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {CardCardHeader} from 'material-ui/Card';
import Person from 'material-ui/svg-icons/social/person';
import Message from 'material-ui/svg-icons/communication/message';
import Setting from 'material-ui/svg-icons/action/settings';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Createadd from 'material-ui/svg-icons/av/playlist-add'
import {handleClose,Errorcatch,alertopen,SignOutstatus} from '../store/action/index';
import {connect} from 'react-redux';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import '.././App.css';
import Viewlist  from 'material-ui/svg-icons/action/list';
import Back  from 'material-ui/svg-icons/navigation/arrow-back';
import fb from '../store/firebase';
import Bookicon from './bookicon.ico'; 
import IconButton from 'material-ui/IconButton';
import { deepPurple500, cyan900, red500, yellow500, blue500,indigo900,grey50 } from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
import history from '../History';

 
import Addcircle from 'material-ui/svg-icons/content/add-circle-outline';
import CreateAdd from './createAd';
// import { Avatar } from 'material-ui';
var styles={
  bg:{
    backgroundColor:'#1a237e',
    color:'#ffff'
}};

class Maindrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
      open: this.props.open,
      forpost_alert:this.props.forpost.alert,
      CurrentUser:this.props.CurrentUser
    };
    this.SignOut=this.SignOut.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState({
        forpost_alert: nextProps.forpost.alert,
      open:nextProps.open,
      CurrentUser:nextProps.CurrentUser});

    
    }


    SignOut(){
      fb.auth().signOut().then(function(mess) {
        console.log('Signed Out');
        history.push('/');
        this.props.SignOutstatus('SignOut Successfully');
        
      }, function(error) {
        console.error('Sign Out Error', error);
      });
    }


  // handleToggle = () => this.setState({open: !this.state.open});

  


  // handleClose = (event) => this.setState({forpost: false});

  render() {
    return (
      <MuiThemeProvider>

              {/* <div > */}

        {/* <RaisedButton
          label="Open Drawer"
          onClick={this.handleToggle}
        /> */}

        <Drawer

          // docked={false}
          width={180}
          // open={this.state.open}
          // open={this.props.open}
          open={this.state.open}
          // onRequestChange={(open) => this.setState({open})}
          onRequestChange={this.props.close}
          // docked={true}
        >
        <IconButton  tooltip="Back" onClick={()=>{this.props.close()
}}>
        < Back color={indigo900}/>

      </IconButton>
        {/* <center> */}
          {/* <Card style={{width:'170px'}}> */}
    {/* <CardHeaer
    style={{width:'170px'}}
      title="Bilal Usman"
      subtitle={<center>UIT</center>}
      avatar={Bookicon}
    /> */}
    {/* <Avatar > */}
{/* <img src="https://firebasestorage.googleapis.com/v0/b/booksharing-99d4f.appspot.com/o/images%2F1d77d7b9-0d5e-404b-b9de-e3450b36f2f1.PNG?alt=media&token=720be3d1-74ee-47ed-a4af-6208c2e47a76"/> */}
      {/* </Avatar> */}
    {/* </Card> */}
    <div >
 <List         
>
 <ListItem 
 style={{backgroundColor:'white'}}
      disabled={true}
      leftAvatar={
        <Avatar src={this.state.CurrentUser.imageurl} />
      }
    >
    {this.state.CurrentUser.name}
    </ListItem>
        <Divider color={grey50} />

      <ListItem  primaryText="My Adds" onClick={()=>{history.push('/myadds')
      this.props.close()}} style={styles.bg} leftIcon={
      <Message color={grey50} />} />
      <Divider style={{height:'2px'}}/>
      {/* <ListItem primaryText="Setting" leftIcon={<Setting/>} />
      <Divider/> */}
 
  {(this.state.forpost_alert)?(
  <CreateAdd open={this.state.forpost_alert} handleClose={this.props.handleClose}/>):("")}
  
      <ListItem primaryText="Create Add" style={styles.bg}  onClick={()=>{
        this.props.alertopen();
         }} leftIcon={<Createadd color={grey50}/>} />
      <Divider style={{height:'2px'}}/>
      <ListItem primaryText="View Adds" style={styles.bg} onClick={()=>{history.push('viewadds');
    this.props.close();}} leftIcon={<Viewlist color={grey50}/>} />
      <Divider style={{height:'2px'}}/>
      <ListItem primaryText="Logout" style={styles.bg} onClick={this.SignOut} style={{textAlign:"center"}} />
      <Divider/>
     
    </List>
       </div>

        
          
        </Drawer>

      {/* </div> */}
      </MuiThemeProvider>
    );
  }
}



function mapstatetoprops(state){
  return{
     forpost:state.alertStatus,
     CurrentUser:state.CurrentUser
  }
}
function mapdispatchtoprops(dispatch){
  return{
     
      handleClose:()=>{
          dispatch(handleClose());
      },alertopen:()=>{
        dispatch(alertopen());
      },
      SignOutstatus:()=>{
        dispatch(SignOutstatus())
      }
  }
}
export default connect(mapstatetoprops,mapdispatchtoprops)(Maindrawer);