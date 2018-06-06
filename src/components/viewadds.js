import React,{Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import * as MUI from 'material-ui'
import '.././App.css';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import Book5 from './book5.jpg';
import Bilal from './images/bilal.jpg';
import {Getadds,alertopen,handleClose} from '../store/action/index';
import {connect} from 'react-redux';
import {deepPurple500,cyan900  ,red500, yellow500, blue500,indigo900,grey50} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import Message from './message';
import Loader from './loader';
import Booksearch from './booksearch';
import Alert from './alertbox';

class Viewadds extends React.Component{
constructor(props){
super(props);

this.state={
      formessage:false,
  AllBooks:[],
  receiverdetails:{},
  loaded:true,
  forbooksearcherror:this.props.forbooksearcherror,
  obj:{},
  CurrentUser:this.props.CurrentUser

}
this.Message=this.Message.bind(this);
this.handleClose=this.handleClose.bind(this);

}

handleClose (){
  this.setState({formessage:false})
}
componentDidMount() {
  // this.props.getStudentsFromFB();
  this.props.Getadds();

  this.setState(() => ({
    loaded: true,
  }))
};
componentWillReceiveProps(nextProps){
this.setState({
  AllBooks:nextProps.allpost,
  forbooksearcherror: nextProps.forbooksearcherror,
  CurrentUser:nextProps.CurrentUser});

}


Message(obj){
  this.setState({formessage:true,obj:obj})
console.log(obj,'message');


}
render(){

    return( 
      

    
   
    
                this.state.AllBooks.length !== 0 ? (
                  <div>
                    <br/>
                   <h2 className="head">BOOK ADDS</h2>
    <br/>
    <div className="container">
                    <div className="row">
                    <div className="col-sm-8">
    <h3><Booksearch/></h3>
                  
    {console.log(this.state.AllBooks,'books')}
      
{ this.state.AllBooks.map((obj,index)=>{
  if(this.state.CurrentUser.uid!=obj.userdetails.uid){
  return(
    
  <div className="viewadd" key={index}>
<Card>
<CardHeader
  title={<b >{obj.userdetails.name}</b>}
  subtitle={obj.userdetails.email}

  avatar={obj.userdetails.imageurl}
/>
<Divider/>
<p title="Book Name" style={{textAlign:'center',fontWeight:'bold',fontSize:'18px',fontFamily:'Lato' ,backgroundColor:'#1a237e', color:'#ffffff',borderRadius:'2px 2px 2px 2px',padding:'4px'}}>{obj.BookName.toUpperCase()}</p>
<CardMedia
  overlay={<CardTitle title={"RS :"+obj.Price}
   />}
>
  <img src={obj.BookUrl} alt="" height="150px"/>
</CardMedia>
<CardText style={{fontSize:"11px"}}>
{obj.BookDescription} 

</CardText>
 <CardActions  >
{console.log(this.props.allpost,'alpost')}
<MUI.RaisedButton label="Message" onClick={()=>  {this.Message(obj)}
}
 labelStyle={{fontSize:'10px'}}  style={{height:'25px',margin:'0 auto'}} backgroundColor={indigo900} labelColor={grey50} 
/>
</CardActions>  
<Message open={this.state.formessage} obj={this.state.obj} handleClose={this.handleClose} />

 {/* {(this.state.forbooksearcherror.alert)?(<Alert open={this.state.forbooksearcherror.alert} message={this.state.forbooksearcherror.message} handleClose={this.props.handleClose}/>):('')} */}

</Card>
</div>)};
})
}


  </div>
  </div> </div>
  </div>):(<Loader />)
  ) 
}




}
function mapstatetoprops(state){
  return{
allpost:state.allpost,
forbooksearcherror:state.alertStatus,
CurrentUser:state.CurrentUser

  }
}


function mapdispatchprops(dispatch){
return{
  Getadds:()=>{
    dispatch(Getadds());
  },
  alertopen:()=>{
    dispatch(alertopen());
  }, 
   handleClose:()=>{
    dispatch(handleClose());
}
}
}

export default connect(mapstatetoprops,mapdispatchprops)(Viewadds);

