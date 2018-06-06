import React, {Component} from 'react';
import Navigation from '../components/afterloginnavigation';
import ChatBox from '../chatapp/component/chatbox';

export default class Chatting extends React.Component{
    render(){  
        return(
    <div>
            <Navigation/>
            <ChatBox />
        </div>)
    }
}