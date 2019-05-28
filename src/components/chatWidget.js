

import React, { Component } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

import logo from './images/arrow.png';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      message:''
       }
  }
  componentDidMount() {
    addResponseMessage("Hi whatsapp dude");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    this.setState({message:newMessage})

    // Firebase.database().ref('/').push(this.state.message)
    console.log(this.state.message);
    // Now send the message throught the backend API
  }
  
  render() {
    return (
      <div className="App">

      <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          title=" UIT BOOK SHARING"
          subtitle="SHARING IS CARING"
          senderPlaceHolder='Enter your Message'
          titleAvatar={logo}
          renderCustomComponent={<p>bilal usman</p>}
        />
      </div>
    );
  } 
}

export default App;