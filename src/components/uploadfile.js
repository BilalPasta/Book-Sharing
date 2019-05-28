// import FileUploader from 'react-firebase-file-uploader';
// import firebase from '../store/firebase';
// import React, { Component } from 'react';
// import '.././App.css';
// import LinearProgress from 'material-ui/LinearProgress';
// import { white,indigo900 } from 'material-ui/styles/colors';
// import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import Uploadicon  from 'material-ui/svg-icons/file/cloud-upload';
// import IconButton from 'material-ui/IconButton';
// import {setimageurl} from '../store/action/index';
// import {connect} from 'react-redux';
import Alert from './alertbox';

// class Profile extends Component {

//     state = {
//     avatar: '',
//     isUploading: false,
//     progress: 0,
//     avatarURL: '',
//     errormessage:''
//     };

//     handleChangeUsername = (event) => this.setState({username: event.target.value});

//     handleUploadStart = () => {

//         this.setState({isUploading: true, progress: 0})};

//     handleProgress = (progress) => this.setState({progress});

   
//     handleUploadError = (error) => {
//         console.log(error.message,'abcdabcd');
//     // this.setState({isUploading: true});

// this.setState({errormessage:error.message})
// console.log(error.message,'msg')  }

//     handleUploadSuccess = (filename) => {
//     this.setState({avatar: filename, progress: 100, isUploading: false});
//     firebase.storage().ref('images').child(filename).getDownloadURL().then(url => {this.setState({avatarURL: url});
//     console.log('billa usman');
//     console.log(this.state.avatarURL,'avator');
//     this.props.setimageurl(this.state.avatarURL);}
// );
  
//     };


//     render() {
//     return (
//     <span>
//     {/* <label>Avatar:</label>
//     {this.state.isUploading &&
//     <p>Progress: {this.state.progress}</p>
//     }
//     {this.state.avatarURL &&
//     <img src={this.state.avatarURL} height="100" width="100"/>
//     } */}
// <center>

//               <IconButton tooltip="Upload Image">

// <label>
//     <FileUploader
// hidden
// accept="image/*"
//     style={{marginBottom:"20px", display:"none"}}
//     name="avatar"
//     randomizeFilename
//     storageRef={firebase.storage().ref('images')}
//     onUploadStart={this.handleUploadStart}
//     onUploadError={this.handleUploadError}
//     onUploadSuccess={this.handleUploadSuccess}
//     onProgress={this.handleProgress}
//     />
//     {/* {(this.state.avatarURL)?(   } */}
//           <Uploadicon />
//           </label>
//       </IconButton>
//       {console.log(!this.state.errormessage ,'err')}
//       {/*  */}
    
//     <LinearProgress mode="determinate" min={0} max={100} style={{width:"40%",color:indigo900}} color={indigo900} value={this.state.progress} />
//     <p>{this.state.progress+'%'}</p>

// </center>
//     </span>
//     );
//     }
//     }
//     function mapstatetoprops(state){
//         return{
//         //    forpost:state.Alert
//         }
//       }
//       function mapdispatchtoprops(dispatch){
//         return{
//             setimageurl:(imageurl)=>{
//                 dispatch(setimageurl(imageurl));
//             }
//         }
//       }
//       export default connect(mapstatetoprops,mapdispatchtoprops)(Profile);


import FileUploader from 'react-firebase-file-uploader';
import firebase from '../store/firebase';
import React, { Component } from 'react';
import '.././App.css';
import LinearProgress from 'material-ui/LinearProgress';
import { white,indigo900 } from 'material-ui/styles/colors';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Uploadicon  from 'material-ui/svg-icons/file/cloud-upload';
import IconButton from 'material-ui/IconButton';
import {setimageurl} from '../store/action/index';
import {connect} from 'react-redux';
// import Alert from './alertbox';

class Profile extends Component {

    state = {
    avatar: '',
    isUploading: false,
    progress: 0,
    avatarURL: '',
    errormessage:'',
    UploadingError:false
    };

    handleChangeUsername = (event) => this.setState({username: event.target.value});

    handleUploadStart = () => {
        console.log(this.state.isUploading,'Uploading');
        this.setState({isUploading: true, progress: 0})};

    handleProgress = (progress) => this.setState({progress});

    handleClose=()=>{
        this.setState({UploadingError:false});
        console.log('set')
    }
    handleUploadError = (error) => {
        console.log(error,'abcd');
    this.setState({UploadingError: true});

// this.setState({errormessage:error.message})
this.setState({errormessage:'Accept Only Image File'})
console.log(error.message,'msg')  }

    handleUploadSuccess = (filename) => {
    this.setState({avatar: filename, progress: 100, isUploading: false});
    firebase.storage().ref('images').child(filename).getDownloadURL().then((url) => {
        this.setState({avatarURL: url});
        console.log(url,'bilal usman');
    console.log('billa usman');
    this.props.setimageurl(this.state.avatarURL);}
);
  
    };


    render() {
    return (
    <span>
        {console.log(this.state.isUploading,this.state.UploadingError)}
             <Alert  open={this.state.UploadingError} message={this.state.errormessage }  handleClose={this.handleClose}/>

    {/* <label>Avatar:</label>
    {this.state.isUploading &&
    <p>Progress: {this.state.progress}</p>
    }
    {this.state.avatarURL &&
    <img src={this.state.avatarURL} height="100" width="100"/>
    } */}
<center>

              <IconButton tooltip="Upload Image">

<label>
    <FileUploader
hidden
accept="image/*"
    style={{marginBottom:"20px", display:"none"}}
    name="avatar"
    randomizeFilename
    storageRef={firebase.storage().ref('images')}
    onUploadStart={this.handleUploadStart}
    onUploadError={this.handleUploadError}
    onUploadSuccess={this.handleUploadSuccess}
    onProgress={this.handleProgress}
    />
    {/* {(this.state.avatarURL)?(   } */}
          <Uploadicon />
          </label>
      </IconButton>
      {console.log(!this.state.errormessage ,'err')}
      {/* <Alert  open={this.state.isUploading} message={this.state.errormessage }  handleClose={this.handleClose}/> */}
      {/*  */}
    
    <LinearProgress mode="determinate" min={0} max={100} style={{width:"40%",color:indigo900}} color={indigo900} value={this.state.progress} />
    <p>{this.state.progress+'%'}</p>

</center>
    </span>
    );
    }
    }
    function mapstatetoprops(state){
        return{
        //    forpost:state.Alert
        }
      }
      function mapdispatchtoprops(dispatch){
        return{
            setimageurl:(imageurl)=>{
                dispatch(setimageurl(imageurl));
            }
        }
      }
      export default connect(mapstatetoprops,mapdispatchtoprops)(Profile);