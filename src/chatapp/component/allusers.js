import React,{Component} from 'react';
import {connect} from 'react-redux';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Back from 'material-ui/svg-icons/navigation/arrow-back';
import IconButton from 'material-ui/IconButton';
import { deepPurple500, cyan900, red500, yellow500, blue500, indigo900, grey50 } from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';
import {startGetAllUsersAction} from '../../store/action/users';
import history from '../../History';
import Loader from '../../components/loader';
import LoderGif from '../../components/load.gif';

import SearchButton from 'material-ui/svg-icons/action/youtube-searched-for';
import '../.././App.css';

import {Conversation_BTW_} from '../../store/action/messages';
class Allusers extends React.Component{
    constructor(props){
        super(props);
        this.state={
            users:[],
            open: this.props.open,
            CurrentUser:this.props.CurrentUser,
            friendsearch:''

        }
        this.openchatbox=this.openchatbox.bind(this);
        this.Change=this.Change.bind(this);
    }
    Change(event) {
        this.setState({ [event.target.name]: event.target.value });
        console.log(event.target.value);
    
    }
   
  componentDidMount (){
      console.log(this.state,'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss');
    this.props.startGetAllUsersAction(this.state.CurrentUser.uid);

   }

    openchatbox(obj){
console.log(obj,'obj')
        this.props.Conversation_BTW_(this.props.allMessages,obj);
      history.push('/chat');
      this.props.close();

    }

    componentWillMount(){
    }
componentWillReceiveProps(nextProps){
this.setState({users:nextProps.allusers.allUsers,
    open:nextProps.open,      CurrentUser:nextProps.CurrentUser});
   
}
    render(){
        console.log(this.state.users,'////////////////')
        return( 
          this.state.users!=null ?
( 
<div className="allusers">
                
        <Drawer
            width={180}
            open={this.state.open}
            onRequestChange={this.props.close}
          >
            <IconButton tooltip="Back" onClick={() => {
        this.props.close();
            }}>
              < Back color={indigo900} />

    
            </IconButton>
        <h3 className="head1">USERS</h3>
            
            {/* <div className="input-group input-group-sm mb-3">
<input type="text" className="form-control" placeholder=" Search By Name" name="friendsearch" onChange={this.Change}   />
  <div className="input-group-prepend">
  <span  className="input-group-text" id="inputGroup-sizing-sm">
  <IconButton onClick={this.submit} style={{backgroundColor:{grey50}}} >
       <SearchButton  color={indigo900}  />
     </IconButton></span>
  </div>
</div> */}
    
          <div >
<List
              >
              {console.log(this.state.users,'uusers')}

              {this.state.users.map((obj,index)=>{

                  return(
                       <ListItem
                  
                  onClick={()=>this.openchatbox(obj)}
                    key={obj.uid}
                  style={{ backgroundColor: 'white' }}
                
                  leftAvatar={
                    <Avatar src={obj.Profileimageurl} />
                  }
                >
                {obj.username}
      </ListItem>
               
                  )
              })
                
            
            }
    
               
              </List>
            </div>
    
    
    
        </Drawer>
    </div>
    ):(<Loader loadingimage={LoderGif} />)
         )}}
     



function mapstatetoprops(state){
    return{
allusers:state.allusers,
CONVERSATION:state.CONVERSATION,
CurrentUser:state.CurrentUser,
allMessages:state.alusermessages.allMessages
    }
}
function mapdispatchtoprops(dispatch){
    return{
        Conversation_BTW_:(uid,messages,imageurl)=>{
dispatch(Conversation_BTW_(uid,messages,imageurl))
        },
        startGetAllUsersAction:()=>{
            dispatch(startGetAllUsersAction());
        }
     
    }
}

export default connect(mapstatetoprops,mapdispatchtoprops)(Allusers);

