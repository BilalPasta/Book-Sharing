import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React from 'react';
// import Home from '../images/home.png';
//navbar icons

import Hom from '../images/home.png';
import ContactUs from '../images/contact-us.png';
import AboutUs from '../images/about-us.png';
import history from '../../History';
import fb from '../../store/firebase';
export default class SideMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selected: 'home',
            expanded: false
        };
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
  
    render(){
        return(
            <SideNav
                            onSelect={(selected) => {
                                const to = '/' + selected;
                                if (location.pathname !== to&&selected!=="SignOut") {
                                    history.push(to);
                                }
                                else{
                                    this.SignOut();
                                }
                            }}
                        >
                            <SideNav.Toggle />
                            <SideNav.Nav defaultSelected="">
                                <NavItem eventKey="">
                                    <NavIcon>
                                        <img src={Hom}/>
            
                                    </NavIcon>
                                    <NavText>
                                        HOME
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="about" >
                                    <NavIcon>
                                        <img src={AboutUs}/>
                                    </NavIcon>
                                    <NavText>
                                        ABOUT
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="contact">
                                    <NavIcon>
                                        <img src={ContactUs}/>
                                    </NavIcon>
                                    <NavText>
                                        CONTACT
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey={this.props.pagelink}>
                                    <NavIcon>
                                        <img src={this.props.icon}/>
            
                                    </NavIcon>
                                    <NavText>
                                        {this.props.pagename}
                                    </NavText>
                                </NavItem>
                            </SideNav.Nav>
                        </SideNav>
        )
    }
}

