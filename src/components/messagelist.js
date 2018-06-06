import React,{Component} from 'react';
import {Getmessagelist} from '../store/action/index';
// import Reply from 'material-ui/svg-icons/Content/reply';
import {connect} from 'react-redux';


class Messagelist extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
        this.props.Getmessagelist();
    }

componentWillReceiveProps(nextProps){
this.props=nextProps;
}
    render(){
        return(
            <div>
{console.log(this.props.allmessages,'props')}
            </div>
        )
    }
}


function mapstatetoprops(state){
    return{
       allmessages:state.allmessages
  
        
    }
  }
  function mapdispatchtoprops(dispatch){
      return{
        Getmessagelist:()=>{
            dispatch(Getmessagelist());
        }
      }
  }
  
  export default connect(mapstatetoprops,mapdispatchtoprops)(Messagelist);