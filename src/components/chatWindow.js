import React, {Component} from 'react';
import {Launcher} from './src'
import fb from '../store/firebase';



export default class Demo extends Component {

  constructor(props) {
        let Messages = [];

    super(props);
    this.state = {
      messageList: Messages,
      BookId:this.props.BookNuserDetails.id
    }
    console.log(this.props.CurrentUser,'CurrentUser----------');

  alert(this.state.BookId)
    fb.database().ref(`BookDetails`).child(`/${this.state.BookId}/Messages`).on('child_added', (snapshot) => {
      let conversationMessage=snapshot.val();
      console.log(conversationMessage,this.state.BookId,'conversationMessage---------');
      // if(conversationMessage.senderUid===this.props.CurrentUser.uid){
        console.log(conversationMessage);
      Messages.push(conversationMessage);
      // this.setState({
      //   messageList: [...this.state.messageList,conversationMessage ]
      // })
      // }
  });
 }

  

  _onMessageWasSent(message) {
      


    this.setState({
      messageList: [...this.state.messageList, message]
    })
    message.senderUid=this.props.CurrentUser.uid;
    fb.database().ref('BookDetails').child(`/${this.props.BookNuserDetails.id}/Messages`).push(message)
  }

  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      });
      
    
    }
  }

  render() {
    console.log(this.props.BookId);
    return (<div>
      <Launcher
        agentProfile={{
          teamName: 'react-live-chat',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
        showEmoji
      />
    </div>)
  }
}