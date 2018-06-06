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

class Myadds extends React.Component{
constructor(props){
super(props);

this.state={
  AllBooks:[],
  loaded:true,
  CurrentUser:this.props.CurrentUser

}

}


componentDidMount() {

  this.setState(() => ({
    loaded: true,
  }))
};
componentWillReceiveProps(nextProps){
this.setState({
  AllBooks:nextProps.allpost,
CurrentUser:nextProps.CurrentUser});

}
componentWillMount(){
    this.props.Getadds();

}


render(){
    return( 
                this.state.AllBooks.length !== 0 ? (
                  <div>
                    <br/>
                   <h2 className="head">MY ADDS</h2>
    <br/>
    <div className="container">
                    <div className="row">
                    <div className="col-sm-8">
    <h3><Booksearch/></h3>
                  
      
{ this.state.AllBooks.map((obj,index)=>{
  return(<div>

      {(obj.userdetails.uid==this.state.CurrentUser.uid)?
  (<div className="viewadd" key={index}>
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


</Card>
</div>):('')}
</div>);
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

export default connect(mapstatetoprops,mapdispatchprops)(Myadds);

