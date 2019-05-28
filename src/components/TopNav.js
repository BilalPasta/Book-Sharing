import React from 'react';
import SideMenu from './SideMenu.js';
import IconButton from 'material-ui/IconButton';
// import MenuIcon from './images/home.png'
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import People from 'material-ui/svg-icons/social/people';
import list from 'material-ui/svg-icons/action/list';
import Home from './images/home.png';
import history from '../History';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import Book from 'material-ui/svg-icons/action/book'; 
  import BookSharing from './images/book-sharing-logo.png';
  import { deepPurple500, cyan900, red500, yellow500, blue50,indigo900,grey50 } from 'material-ui/styles/colors';
  import Person from 'material-ui/svg-icons/social/person';
  import MenuIcon from './images/menu.png';
   
//   import '.././App.css';
import Signup from './images/sign-up.png';
export default class TopNavbar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            opendrawer:false
        }
        this.toggle = this.toggle.bind(this);
        this.handleclose=this.handleclose.bind(this);
        this.OpenDrawer=this.OpenDrawer.bind(this);

    }
    OpenDrawer = () =>{ 
       
        this.setState({opendrawer: !this.state.opendrawer});
  
        }

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }


        handleclose(){
            this.setState({
              opendrawer:false
            })
          }
        
    render(){
        return(
            <div className="navigation">
                <Navbar   color={grey50}  >
<div style={{width:"100%"}}>
          <IconButton onClick={this.OpenDrawer}>
          {/* <Book color={grey50} 
       /> */}
       <img src={MenuIcon} />
              </IconButton>
          <NavbarBrand className="product_name">
          <span className="book">  
            {/* <Book color={grey50} 
       /> */}
       <img src={BookSharing} style={{marginRight:'2px'}}/>
       BOOKSHARING</span>
              
          </NavbarBrand>

            <Nav className="rightalign" >
              <NavItem>
                  {this.props.signin?(    <IconButton tooltip={this.props.CurrentUserName} >
       <Avatar src={this.props.CurrentUserImage} />
       
     </IconButton>):(   <IconButton  tooltip="SignUp"
    tooltipPosition="bottom-left">  
    <Avatar src={Signup} onClick={()=>history.push('/Signup')} />
     </IconButton>
 )}
             





              </NavItem>
              
          
            
              
          
             
            </Nav>
     </div>
        </Navbar>
         
     
            {this.state.opendrawer ?( <SideMenu UserImage={this.props.CurrentUserImage}   UserName={this.props.CurrentUserName} user signin={this.props.signin} open={this.state.opendrawer} close={this.handleclose}/>):''}
</div>
        )
    }
}