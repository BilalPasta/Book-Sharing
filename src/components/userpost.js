import React,{Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import * as MUI from 'material-ui'
import '.././App.css';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import {Getadds,alertopen,handleClose} from '../store/action/index';
import {connect} from 'react-redux';
import {deepPurple500,cyan900  ,red500, yellow500, blue500,indigo900,grey50} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';

class Userpost extends React.Component{
constructor(props){
super(props);
this.state={

  AllBooks:[],
}
this.props.Getadds();

}

componentWillReceiveProps(nextProps){
this.setState({
  AllBooks:nextProps.allpost,
});

}

render(){

    return(
    <div className="container">
    <h2 className="head">MY ADDS</h2>
    <div className="row">
    
      <div className="col-sm-8">
    <div>
    {console.log(this.props.CurrentUser,'kurr')}
{ this.state.AllBooks.map((obj,index)=>{
  return(
    (obj.userid==this.props.CurrentUser.uid)?

  (<div className="viewadd" key={index}>
<Card>
<CardHeader
  title={<b >{obj.BookName}</b>}
  subtitle={obj.email}

  avatar={obj.BookUrl}
/>
<Divider/>
<CardMedia
  overlay={<CardTitle title={"RS :"+obj.Price}
   />}
>
  <img src={obj.BookUrl} alt="" height="150px"/>
</CardMedia>
<CardText style={{fontSize:"11px"}}>
{obj.BookDescription} 

</CardText>



</Card>
</div>):'');
})
}

      </div>

  </div>
  </div>
  </div>
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
  },  handleClose:()=>{
    dispatch(handleClose());
}
}
}

export default connect(mapstatetoprops,mapdispatchprops)(Userpost);


