import React, {Component} from 'react';
import Navigation from '../components/afterloginnavigation';
import Viewadds from '../components/viewadds';
import Myadds from '../components/myads';

export default class OwnAdds extends React.Component{
    render(){  
        return(
    <div>
            <Navigation/>
            <Myadds />
        </div>)
    }
}