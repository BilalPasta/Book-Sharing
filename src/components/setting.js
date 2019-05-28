// import React,{Component} from 'react';
// import fb from '../store/firebase';
// import Alert from './alertbox';
// import {alertopen,handleClose} from '../store/action/index';
// import {connect} from 'react-redux';



// class Personalprofile extends React.Component{
//     constructor(props){
//         super(props);
// this.state={
//     oldpassword:'',
//     newpassword:'',
//     newusername:'',
//     newimageprofile:''
// };
  
// this.ChangePassword=this.ChangePassword.bind(this);
// }
// componentWillReceiveProps(nextProps){
//     this.props=nextProps;
    
//     }


// ChangePassword(){
//     var user = fb.auth().currentUser;

//     user.updatePassword('bilalusman').then(function() {
// console.log('hogya');
//     }, function(error) {
//         this.props.alertopen(error.message);
//       });
// }

//     render(){
// return(<div>
//         <h2>PERSONAL PROFILE</h2>
//         {/* {console.log(this.props,'alert')}
//      */}
//      {<Alert open={this.props.alertStatus.alert} message={this.props.alertStatus.message} handleClose={this.props.handleClose}/>}
//      <button onClick={this.ChangePassword}>open</button>
//         </div>
// );
//     }


// }

// function mapstatetoprops(state){
//     return{
//         alertStatus:state.alertStatus
//     }
// }


// function mapdispatchtoprops(dispatch){

// return{
//     alertopen:()=>{
//         dispatch(alertopen())
//     },
//     handleClose:()=>{
//         dispatch(handleClose())
//     }
// }
// }
// export default connect(mapstatetoprops,mapdispatchtoprops)(Personalprofile);