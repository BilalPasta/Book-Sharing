// import React,{Component} from 'react';
// import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import * as MUI from 'material-ui'
import '.././App.css';
// import FlatButton from 'material-ui/FlatButton';
// import Chip from 'material-ui/Chip';
// import Avatar from 'material-ui/Avatar';
// import Book5 from './book5.jpg';
// import Bilal from './images/bilal.jpg';
// import {Getadds,alertopen,handleClose,booksearch} from '../store/action/index';
// import {connect} from 'react-redux';
// import {deepPurple500,cyan900  ,red500, yellow500, blue500,indigo900,grey50} from 'material-ui/styles/colors';
// import Divider from 'material-ui/Divider';
// import Message from './message';
// import Loader from './loader';
// import IconButton from 'material-ui/IconButton';
// import SearchButton from 'material-ui/svg-icons/action/youtube-searched-for';



// class BookSearch extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             BookName:''
//         }
//         this.Change=this.Change.bind(this);
//         this.submit=this.submit.bind(this);
//     }
//     submit(){
//         if(this.state.BookName!=''){
// this.props.booksearch(this.state.BookName.toLowerCase());
// }
// else{

// }
//     }
//     Change(event) {
//         this.setState({ [event.target.name]: event.target.value });
//         console.log(event.target.value);
//         this.props.booksearch(this.state.BookName.toLowerCase());
        
    
//     }

//     render(){
//         return(
// <div className="input-group mb-3 centre">
// <input type="text" className="form-control form-control-sm rounded" placeholder=" Search By Book Name" name="BookName" style={{textAlign:'left'}} onChange={this.Change}  />
//   <div className="input-group-prepend" >
//   <IconButton onClick={this.submit} style={{backgroundColor:{grey50}}} >
//        <SearchButton  color={indigo900}  />
//      </IconButton>
//   </div>
// </div>
//         )
//     }
// }

// function mapstattoprops(state){
// return{

// }
// }
// function mapdispatchtoprops(dispatch){
// return{
//     booksearch:(BookName)=>{
//         dispatch(booksearch(BookName))
//     }
// }
// }


// export default connect(mapstattoprops,mapdispatchtoprops)(BookSearch);

import React, {Component} from 'react'
// import {render} from 'react-dom'

import SearchInput, {createFilter} from 'react-search-input'

// import emails from './mail'


export default class BookSearch extends Component {
  constructor (props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }

  render () {

    return (
        <SearchInput className='search-input' value={this.state.searchTerm} />
     
    )
  }

  searchUpdated (term) {
    this.setState({searchTerm: term})
  }

}