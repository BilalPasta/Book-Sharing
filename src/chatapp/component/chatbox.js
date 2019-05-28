import React from 'react';
import Send  from 'material-ui/svg-icons/content/send';
import { deepPurple500, cyan900, red500, yellow500, blue500,indigo900,grey50 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import '../.././App.css';
import {startAddMessages,Conversation_BTW_} from '../../store/action/messages'
import {connect} from 'react-redux'
import Chatbubble from './chatmessages';
import fb from '../../store/firebase';
import { stat } from 'fs';
import moment from 'moment';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

const style = {
 
    width: '90%',
    margin: 30,
    textAlign: 'center',
    display: 'inline-block',
    // paddingBottom:'-2px'

    padding:'2px',
    // marginTop:'3px'
  };

import Loader from '../../components/loader';
   import {startGetUserMessages} from '../../store/action/messages';



class ChatBox extends React.Component {
constructor(props){
    super(props);
    this.state={
        message:'',
        senderuid:this.props.CurrentUser.uid,
        recipientuid:this.props.CONVERSATIONdetails.fuid,
        conversationmessages:this.props.conversationmessages,
        recipientProfile:this.props.CONVERSATIONdetails.Profileimageurl,
        senderProfile:this.props.CurrentUser.Profileimageurl

     
    },
    this.submit=this.submit.bind(this);
    this.Change=this.Change.bind(this);
}
componentWillMount(){
}

componentWillReceiveProps(nextprops){
    this.props=nextprops;
this.setState({
    senderuid:nextprops.CurrentUser.uid,
    recipientuid:nextprops.CONVERSATIONdetails.fuid,
    conversationmessages:nextprops.conversationmessages,
    recipientProfile:nextprops.CONVERSATIONdetails.Profileimageurl,
    senderProfile:nextprops.CurrentUser.Profileimageurl
})
}
submit(props){

var obj={
    senderuid:this.state.senderuid,
    recipientuid:this.state.recipientuid,
    message:this.state.message,
    seen :false,
    timetosend:moment().valueOf()

}
//    delete obj.conversationmessages;
    this.props.startAddMessages(obj);


}
Change(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value);

}

componentDidMount(){

}
    render() {


        return(
            <Paper style={style} zDepth={1} >
            <div>

       <p className="username">{this.props.recipientname}</p>
       <Divider color={grey50} />
   {console.log(this.props.recipientname,'reci')}
        <Chatbubble  conversationmessages={this.state.conversationmessages}/>


 <div className="input-group mb-3">
<input type="text" className="form-control form-control-sm rounded" name="message" onChange={this.Change}  />
  <div className="input-group-prepend">
  <IconButton  onClick={this.submit} >
       <Send color={indigo900}  />
     </IconButton>
  </div>
</div> 
        {        console.log(this.props.CONVERSATIONdetails,'myimage')
}
            </div>    
            </Paper>                 )

    }
  }
  function mapstatetoprops(state){
      return{
CONVERSATIONdetails:state.CONVERSATION,
allMessages:state.alusermessages.allMessages,
conversationmessages:state.CONVERSATION.messages,
CurrentUser:state.CurrentUser,
recipientname:state.CONVERSATION.recipientname

      }
  }
  function mapdispatchtoprops(dispatch){
      return{
        startAddMessages:(obj)=>{
            dispatch(startAddMessages(obj))
        },
        Conversation_BTW_:(uid,messages,image)=>{
            dispatch(Conversation_BTW_(uid,messages,image))
        },startGetUserMessages:()=>{
            dispatch(startGetUserMessages())
        }
      }
  }
  export default connect(mapstatetoprops,mapdispatchtoprops)(ChatBox);
