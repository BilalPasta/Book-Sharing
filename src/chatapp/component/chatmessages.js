import ChatBubble from 'react-chat-bubble';
import React from 'react';
import {connect} from 'react-redux';
// import { CurrentUser } from '../../store/reducers/authentication';
import { stat } from 'fs';
class Chatbub extends React.Component{
    constructor(props){
    super(props);
this.state={
    message:this.props.conversationmessages
    // message:[{
    //     type:0,
    //     image:'https://firebasestorage.googleapis.com/v0/b/booksharing-99d4f.appspot.com/o/images%2F6f4f96f9-80ca-4ddd-9421-9f16233a96f4.jpg?alt=media&token=4f414b48-701b-4c24-a722-7d1b92a10e60',
    //     message:JSON.parse("<p><img src='https://firebasestorage.googleapis.com/v0/b/booksharing-99d4f.appspot.com/o/images%2F6f4f96f9-80ca-4ddd-9421-9f16233a96f4.jpg?alt=media&token=4f414b48-701b-4c24-a722-7d1b92a10e60'/><br/>bilal usman</p>")

    // }]
}
}


componentWillReceiveProps(nextprops){
    messages:nextprops.conversationmessages
    this.props=nextprops;
}
render(){
    return(  <div>
        {/* {console.log(this.props.conversationmessages,'chlja bhai')} */}
                <ChatBubble  messages = {this.props.conversationmessages} onNewMessage={()=>{}}/>
{/* //   */}
        </div>)
}
}

// export default ;
function mapstatetoprops(state){
    return{
// conversationmessages:state.recipient.messages
    }
}
function mapdispatchtoprops(dispatch){
    return{
   
  
    }
}
export default connect(mapstatetoprops,mapdispatchtoprops)(Chatbub);

