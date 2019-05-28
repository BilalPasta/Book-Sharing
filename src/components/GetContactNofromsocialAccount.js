import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

class GetContact extends React.Component {
    constructor(props){
        super(props);
        this.state={
            contactnumber:''
        }
        this.Change = this.Change.bind(this);

    }
    Change(event) {
        this.setState({ [event.target.name]: event.target.value });
        console.log(event.target.value);
      
      }

  render() {
    return (
      <div>
        {/* {alert("ajao")} */}
        <Dialog
          open={this.props.open}
          onClose={this.props.close()}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            Enter Your Contact Number
            </DialogContentText>
            {/* <TextField
    onChange={this.Change}
    name="contactnumber"
      floatingLabelText="Password"
      type="text"
    /><br /> */}
          </DialogContent>
          <DialogActions>
     
            <Button  color="primary">
              Save
            </Button>
            <Button onClick={this.props.close()} color="primary" autoFocus>
              close
            </Button>
          </DialogActions>
        </Dialog> 
      </div>
    );
  }
}

export default GetContact;