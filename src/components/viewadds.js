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
import SearchInput, {createFilter} from 'react-search-input';
import Booksearch from './booksearch';
import Alert from './alertbox';
import LoaderGif from './images/loading.gif';
import MessageBox from '../components/chatWindow';
const KEYS_TO_FILTERS = ['BookName']
import ContactNumber from './ContactNumber';
import Contact from './Contact';
import RaisedButton from 'material-ui/RaisedButton';
import GetContact from './GetContactNofromsocialAccount';
const style = {
  margin: 12,
  
};

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
  CurrentUser:this.props.CurrentUser,
  searchTerm: '',
  OpenContactDialog:true

}
this.searchUpdated = this.searchUpdated.bind(this)

this.Message=this.Message.bind(this);
this.handleClose=this.handleClose.bind(this);
this.handleDialogClose=this.handleDialogClose.bind(this);


}


handleClose (){
  this.setState({formessage:false})
}
handleDialogClose(){
  this.setState({
    OpenContactDialog:!this.state.OpenContactDialog
  })
}
componentWillMount() {
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
searchUpdated (term) {
  this.setState({searchTerm: term})
}

Message(obj){
  this.setState({formessage:true,obj:obj})
console.log(obj,'message');


}
render(){
 
  console.log(this.state.AllBooks,"bilalusman");
  alert(this.state.AllBooks);
  const filteredEmails = this.state.AllBooks.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return( 
      

    
   
    
                this.state.AllBooks.length !== 0 ? (
                  <div>
                    <br/>
                    {console.log(this.state.AllBooks,'allbooks')}
                   <h2 className="head">BOOK ADDS</h2>
    <br/>
    <div className="container">
   
                    <div className="row">
                    <div className="col-sm-8">
    
             <SearchInput className="search-input" onChange={this.searchUpdated} />

    
  
{filteredEmails.map((obj,index)=>{ 
  {console.log(obj,'uid')}

  return(
    
  <div className="viewadd" key={index}>
<Card>
  {alert()}
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
<CardText >
{obj.BookDescription} 
        </CardText>
        <CardActions>
  
    <RaisedButton label="Contact" labelStyle={{color:'#fff',fontWeight:'bold'}}  buttonStyle={{backgroundColor:'#1a237e'}}    />

          
        </CardActions>
 
    

</Card>

</div>)

})

}


  </div>
  </div> 
</div>

  </div>
  ):(<Loader loadingimage={LoaderGif} />)
  ) 
}


componentDidMount(){
  // if(this.props.CurrentUser.contact==null){
  //   this.setState({OpenContactDialog:true});
  // }
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

