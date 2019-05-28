import React,{Component} from 'react';
import Navigation from './navigation';
import Slider from './slider';

import Signin from './login';




export default class FirstPage extends React.Component{
    constructor(props){
super(props);

    }


    render(){
        return( <div>
                <Navigation/>
                <Slider />
                <Signin />
                </div>
        )
    }
}
