import React from 'react';
//icons
import Home from './images/home.png';
import Contact from './images/contact-us.png';
import AboutUs from './images/about-us.png';
// import Sidebar from "react-sidebar";
// const mql = window.matchMedia(`(min-width: 800px)`);
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import history from '../History';
import SignOut from './images/signout.png';
import SignIn from './images/signin.png';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import fb from '../store/firebase';
import { deepPurple500, cyan900, red500, yellow500, blue500,indigo900,grey50 } from 'material-ui/styles/colors';
import Cross from './images/delete.png';
var styles={
  bg:{
    backgroundColor:'#1a237e',
    color:'#ffff'
}};
export default class DrawerMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.SignOut=this.SignOut.bind(this);

  }
  SignOut(){
    fb.auth().signOut().then(function(mess) {
      console.log('Signed Out');
      history.push('/');
      // this.props.SignOutstatus('SignOut Successfully');
      
    }, function(error) {
      console.error('Sign Out Error', error);
    });
  }
  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
     
      
        <Drawer
          docked={false}
          width={200}
          open={this.props.open}
          // onRequestChange={this.props.close}
          enterTransitionDuration={100}
          leaveTransitionDuration={0}
        >
          
         <List    >

         
         

             <ListItem 
           rightIcon={<img src={Cross}/>} 
           style={styles.bg}
           onClick={()=>{
         
            this.props.close()}}
             >
             <p>
               </p>
             </ListItem>

           {this.props.signin?( <ListItem 
 style={{backgroundColor:'white'}}
      // disabled={true}
      leftAvatar={
        <Avatar src={this.props.UserImage} />
      }
    > 
  {this.props.UserName}
    </ListItem>):('')}

  
  <Divider style={{height:'1.5px'}}/>

        
            <ListItem primaryText="HOME"
           leftIcon={<img src={Home}/>} style={styles.bg}
           onClick={()=>{
            history.push('/')
            this.props.close()}}
             />

     <Divider style={{height:'1.5px'}}/>

 
  
     

            <ListItem primaryText="ABOUT"
           leftIcon={<img src={AboutUs}/>} style={styles.bg}
           onClick={()=>{
            history.push('/about')
          this.props.close }}
             />
      {/* <Divider style={{height:'2px'}}/> */}
      <ListItem primaryText="CONTACT "
           leftIcon={<img src={Contact}/>} style={styles.bg}
           onClick={()=>{
            history.push('/contact')
          this.props.close }}
             />
      <Divider style={{height:'1px'}}/>
      {this.props.signin?(<div>
        <ListItem primaryText={this.props.Text} style={styles.bg}  onClick={
        this.props.createAddPopUp} style={{textAlign:"center"}} />
        
      <Divider style={{height:'1px'}}/> 
        </div>):('')}
   
        {this.props.signin?( <ListItem 
        onClick={()=>this.SignOut()}
 style={{backgroundColor:'white'}}
      // disabled={true}
      leftIcon={<img src={SignOut}/>}
    > 
SIGNOUT
    </ListItem>):(<ListItem onClick={()=>this.props.close()}
 style={{backgroundColor:'white'}}
      // disabled={true}
      leftIcon={<img src={SignIn}/>}
    > 
SIGNIN
    </ListItem>)}
      </List>

        </Drawer>

    );
  }
}

