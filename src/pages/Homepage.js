
import React, {Component} from 'react';
import Navigation from '../components/navigation';
import Signin from '../components/login';
import Slider from '../components/imageslider/Slider';
import history from '../History'
import SignUp from '../components/signup';
import SideMenu from '../components/sideMenu/sideMenu';
import Signup from '../components/images/sign-up.png';
import TopBar from '../components/TopNav';
export default class Home extends React.Component{
    render(){
        return(
            <div>
                {/* <Navigation pagename="SignUp" pagelink="signup"/> */}
                <TopBar />
                {/* <SideMenu pagename="SIGNUP" pagelink="Signup" icon={Signup}/> */}
                <Slider/>
<Signin/>
            
           </div>
        )
    }
}



