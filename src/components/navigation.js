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
  // import history from '../History';
  import { Link } from 'react-router-dom'
  import '.././App.css';
  import Book from 'material-ui/svg-icons/action/book';
  import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Bookicon from './bookicon.ico'; 
import {brown500,grey50} from 'material-ui/styles/colors';
import { colors } from 'material-ui/styles';
import Alert from './alertbox';
import { handleClose } from '../store/action';

var aboutinfo='Booksharing is a platform in which you can share and take book easily';
var Contact="If you have any query about this platform contact" +"\nbilalpasta012@gmail.com";
export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.info=this.info.bind(this);
    this.Contactinfo=this.Contactinfo.bind(this);
    this.handleClose=this.handleClose.bind(this);
    this.state = {
      isOpen: false,
    inform:false,
    informmessage:''
    };

  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  info(){
  
this.setState({
  inform:true,
  informmessage:aboutinfo
})
}
handleClose(){
  this.setState({
    inform:false,
    informmessage:''
  })
}
Contactinfo(){
  this.setState({
    inform:true,
    informmessage:Contact
  })
}
  
  render() {
    // {console.log(aboutinfo)}
    return (
      <div>
        <Navbar  className="nav" color={grey50}  dark  expand="md" >

          {/* <span> */}
          <NavbarBrand >
          <MuiThemeProvider>
        <span className="book">    <Book color={grey50} 
       />BOOKSHARING</span>
          </MuiThemeProvider></NavbarBrand>

          <NavbarToggler  className="navlink"  onClick={this.toggle} />
          
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="navItem" >
                <NavLink tag={Link} to='/' className="navlinkfont">Home</NavLink>
              </NavItem>
              <NavItem style={{color:'white'}}>
                <NavLink onClick={this.info} className="navlinkfont">About</NavLink>
              </NavItem>
              <NavItem style={{color:'white'}}>
                <NavLink onClick={this.Contactinfo}  className="navlinkfont">Contact</NavLink>
              </NavItem>
              <NavItem style={{color:'white'}}>
                <NavLink tag={Link} to={`/${this.props.pagelink}`} className="navlinkfont">{this.props.pagename}</NavLink>
              </NavItem>
             <Alert open={this.state.inform} message={this.state.informmessage} handleClose={this.handleClose} />
            </Nav>
          </Collapse>
          {/* </span> */}
     
        </Navbar>
      </div>
    );
  }
}