

  import Person from 'material-ui/svg-icons/social/person';
// import Notification from './Notification';
import Notification from './notify';
import React from 'react';
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
  import history from '../History';
  import { Link } from 'react-router-dom';
  import Book from 'material-ui/svg-icons/action/book'; 
   import People from 'material-ui/svg-icons/social/people';
import '.././App.css';
  // import Book from 'material-ui/svg-icons/action/book';
  import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
  import writepost from './writepost.PNG';
  import Chip from 'material-ui/Chip';
  import Avatar from 'material-ui/Avatar';
import Drawer from './drawer';
import UserDrawer from '../chatapp/component/allusers';
import { deepPurple500, cyan900, red500, yellow500, blue500,indigo900,grey50 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';


  

export default class HomeNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.handleclose=this.handleclose.bind(this);
    this.state = {
      isOpen: false,
      opendrawer:false,
      userdrawer:false
    };
    this.OpenDrawer=this.OpenDrawer.bind(this);
    this.Userdrawer=this.Userdrawer.bind(this);

    this.userhandleclose=this.userhandleclose.bind(this);
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


  userhandleclose(){
    this.setState({userdrawer:false });
    console.log('chl gya');
  }

  Userdrawer=()=>{
    if(this.state.opendrawer){
      this.handleclose();
      this.setState({userdrawer:!this.state.userdrawer});
    }
    else{
      this.setState({userdrawer:!this.state.userdrawer});

    }
  }
    OpenDrawer = () =>{ 
      if(this.state.userdrawer){
      this.userhandleclose();
      this.setState({opendrawer: !this.state.opendrawer});

      }
      else{
      this.setState({opendrawer: !this.state.opendrawer});}}

  render() {
    return (
      <div className="navigation">
        <Navbar   color={grey50}  >
<div style={{width:"100%"}}>
          {/* <span> */}
          <NavbarBrand className="product_name">
          <span className="book">    <Book color={grey50} 
       />BOOKSHARING</span>
              
          </NavbarBrand>

          {/* <NavbarToggler onClick={this.toggle} /> */}
          
          {/* <Collapse isOpen={this.state.isOpen} navbar> */}
            <Nav className="rightalign" >
              <NavItem>
                 <IconButton tooltip="Profile" onClick={this.OpenDrawer}>
       <Person color={grey50} />
       <p>
         </p>
     </IconButton>

              </NavItem>
              
              <NavItem>
              <IconButton tooltip="Friends" onClick={this.Userdrawer}>
       <People color={grey50} />
     </IconButton>
              </NavItem>
              {/* <NavItem>
               <Notification color={grey50} />
              </NavItem> */}
              
          
             
            </Nav>
     </div>
        </Navbar>
      <UserDrawer open={this.state.userdrawer} close={this.userhandleclose} /> 

       {this.state.opendrawer ?( <Drawer open={this.state.opendrawer} close={this.handleclose}/>):''}
      </div>
    );
  }
}