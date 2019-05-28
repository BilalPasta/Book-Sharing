import React, {Component} from 'react';
import Navigation from '../components/afterloginnavigation';
import Viewadds from '../components/viewadds';
import Myadds from '../components/myads';
import SideMenu from '../components/sideMenu/sideMenu';
 import SignOut from '../components/images/signout.png';
import Topbar from '../components/TopNav';
import {
    connect
} from 'react-redux';
import { func } from 'prop-types';
 class AfterLogin extends React.Component{
    render(){  
        return(
    <div>
            {/* <Navigation/> */}
            {/* <SideMenu pagename="SIGNOUT" pagelink="SignOut" icon={SignOut} /> */}
            <Topbar CurrentUserName={this.props.CurrentUser.name} CurrentUserImage={this.props.CurrentUser.imageurl} signin={true}/>
            < Viewadds/>
            {/* {alert("chla")} */}
        </div>)
    }
}
function mapstatetoprops(state){
return{
    CurrentUser:state.CurrentUser

}
}
function mapdispatchtoprops(dispatch){
    return{

    }
}
export default connect(mapstatetoprops,mapdispatchtoprops)(AfterLogin);