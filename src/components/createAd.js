
import React, {Component} from 'react';
import '.././App.css';
// import { Container, Row, Col } from 'reactstrap';
import {deepPurple500,cyan900  ,red500, yellow500, blue500,indigo900,grey50} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import { Button } from 'reactstrap';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import SvgIcon from 'material-ui/SvgIcon';
import RaisedButton from 'material-ui/RaisedButton';
import fb from '../store/firebase';
import {connect} from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Profile from './uploadfile';
import LinearProgress from 'material-ui/LinearProgress';


const style = {
    margin: 12,
    backgroundColor:cyan900
  };
  const styles = {
    underlineStyle: {
        borderColor: indigo900, color: indigo900
    },
    floatingLabelFocusStyle: {
        color: indigo900,

    }
}





      const customContentStyle = {
        width: '95%',
        maxWidth: 'none',
        height:'80%'
      };

class  CreateAdd extends React.Component{
    constructor(props){
        super(props);
this.state={
  BookDescription:'',
    BookName:'',
    // open:false,
    BookUrl:this.props.imageurl,
    price:'',
   userdetails:this.props.CurrentUser ||null
}


this.Change=this.Change.bind(this);
this.Submit=this.Submit.bind(this);
    }

componentWillReceiveProps(nextprops){
// console.log(this.props.Currentuser,'curr');
this.setState({
  BookUrl:nextprops.imageurl,
  userdetails:nextprops.CurrentUser
 
  
});
}
    Change(event){
        this.setState({[event.target.name]:event.target.value});
        console.log(event.target.value);
        
                  }

      Submit(){
       let obj={
        BookName:this.state.BookName.toLowerCase(),
        BookDescription:this.state.BookDescription,
        BookUrl:this.state.BookUrl,
        Price: this.state.price,
     userdetails:this.state.userdetails

  };
        if(this.state.BookName!=''&&this.state.BookDescription!=''&&this.state.userdetails!=null&&this.state.price!='' &&this.state.BookUrl!=''){
  //  console.log(obj,'oooooobobbbbbbbbbbbbbbbbjjjjjjjj')

        fb.database().ref('/').child('BookDetails').push(obj).then(()=>{
          this.props.handleClose();
        }).catch((error)=>{
console.log(error.message);
        })
 
      }
   
    
    }
   

    render(){
     
      console.log('abc');

        const actions = [
            <RaisedButton
              label="Cancel"
              disabled={false}
              onClick={this.props.handleClose}
              labelStyle={{fontSize:'10px'}}  style={{height:'25px',marginRight:'2px'}} backgroundColor={indigo900} labelColor={grey50} 
            />,

            <RaisedButton
              label="Post"
         onClick={this.Submit}
       
                disabled={(this.state.BookName!=''&&this.state.userdetails!=null&&this.state.BookDescription!=''&&this.state.price!='')?(false):(true)}
              labelStyle={{fontSize:'10px'}}  style={{height:'25px'}} backgroundColor={indigo900} labelColor={grey50}
            />
          ];
        return(
  <div className="drawer1">


             <Dialog
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.props.handleClose}
          autoScrollBodyContent={true}
          contentStyle={customContentStyle}

          >

        <center>

                
                   <div>     
                <TextField
                 floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                 onChange={this.Change}
                 name="BookName"
                 underlineFocusStyle={styles.underlineStyle}
                  type="text"
                  style={{width:'90%'}}
                 
             
                   floatingLabelText="BookName"
                  
          />
          <br/>

               <TextField
 onChange={this.Change}
 name="BookDescription"
 underlineFocusStyle={styles.underlineStyle}
  type="text"
  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
style={{width:'90%'}}
  floatingLabelText="Description"
  floatingLabelStyle={{fontSize:'14px'}}
 
/>


<TextField
                onChange={this.Change}
                name="price"
                underlineFocusStyle={styles.underlineStyle}
                 type="number"
                 floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  floatingLabelText="Price"
                  style={{width:'40%'}}
          
                  floatingLabelStyle={{fontSize:'14px'}}
              />

<Profile/>
</div>
            </center>
vrrdrrrrrr
            </Dialog>
          </div>)
    }
}

function mapstatetoprops(state){
  return{
      imageurl:state.imageurl.url,
      CurrentUser:state.CurrentUser

      
  }
}
function mapdispatchtoprops(){
    return{
      
    }
}

export default connect(mapstatetoprops,mapdispatchtoprops)(CreateAdd);




