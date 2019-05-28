
import React, {Component} from 'react';
import Navigation from '../components/navigation';
// import Slider from '../components/slider';
import history from '../History'
import SignUp from '../components/signup';
// import Slider from '../components/imageslider/Slider';
// import Signin from '../components/login';
import Slider from '../components/imageslider/Slider';
import SideMenu from '../components/sideMenu/sideMenu';

import SignIn from '../components/images/signin.png';
import TopBar from '../components/TopNav';
 export default class Home extends React.Component{
    render(){
        return(
            <div>
                {/* <Navigation pagename="SIGNIN" pagelink="/"/>
             */}
                {/* <SideMenu pagename="SIGNIN" pagelink="" icon={SignIn}/> */}
                <TopBar />
                <Slider/>
<SignUp/>
            
           </div>
        )
    }
}




