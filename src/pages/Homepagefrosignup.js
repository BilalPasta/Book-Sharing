
import React, {Component} from 'react';
import Navigation from '../components/navigation';
import Signin from '../components/login';
import Slider from '../components/slider';
import history from '../History'
import SignUp from '../components/signup';

export default class Home extends React.Component{
    render(){
        return(
            <div>
                <Navigation/>
                <Slider/>
<SignUp/>
            
           </div>
        )
    }
}



