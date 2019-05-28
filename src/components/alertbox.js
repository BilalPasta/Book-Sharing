import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepPurple500,cyan900  ,red500, yellow500, blue500,indigo900,grey50} from 'material-ui/styles/colors';


export default class Alert extends React.Component {
  constructor(props){

super(props);
 

}



  render() {
    const actions = [
      <RaisedButton
        label="Ok"
        onClick={this.props.handleClose}
        labelStyle={{fontSize:'10px'}}  style={{height:'25px',marginRight:'2px'}} backgroundColor={indigo900} labelColor={grey50} 

      />
      // <FlatButton
      //   label="Discard"
      //   primary={true}
      //   onClick={this.props.handleClose}
      // />,
    ];

    return (
      <MuiThemeProvider>
      <div>
     
        <Dialog
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.props.handleClose}
          autoDetectWindowHeight={true}
        >
          {this.props.message}
        </Dialog>
      </div>
       </MuiThemeProvider>
    );
  }
}