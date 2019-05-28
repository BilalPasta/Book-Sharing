import '.././App.css';
import RaisedButton from 'material-ui/RaisedButton';
import RadioButton from 'material-ui/RadioButton';
import Popover from 'material-ui/Popover/Popover';
import {Menu, MenuItem} from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import {connect } from 'react-redux';
import React from 'react';

import { deepPurple500, cyan900, red500, yellow500, blue500,indigo900,grey50 } from 'material-ui/styles/colors';

const styles = {
 
  block: {
    display: 'flex',
  },
  block2: {
    margin: 10,
  },
  pre: {
    overflow: 'hidden', 
  },
};



 class Notification extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      anchorOrigin: {
        horizontal: 'left',
        vertical: 'top',
      },
      targetOrigin: {
        horizontal: 'left',
        vertical: 'bottom',
      },
      NotificationData:this.props.NotificationData
    };
  }

  componentWillReceiveProps(nextprops){
this.setState({
  NotificationData:nextprops.NotificationData
})
  }
  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      open: !this.state.open,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  setAnchor = (positionElement, position) => {
    const {anchorOrigin} = this.state;
    anchorOrigin[positionElement] = position;

    this.setState({
      anchorOrigin: anchorOrigin,
    });
  };

  setTarget = (positionElement, position) => {
    const {targetOrigin} = this.state;
    targetOrigin[positionElement] = position;

    this.setState({
      targetOrigin: targetOrigin,
    });
  };

  render() {
    return (
      <div >
{console.log(this.state.NotificationData,'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn nnnnnnnnnnnnnnnnnnnnnnnn')}
     <IconButton  onClick={this.handleClick}>
     <NotificationsIcon  color={grey50}/>
        </IconButton> 
        <Popover
          open={this.state.open}
          // anchorEl={ach}
          anchorReference= 'anchorEl'
          transitionDuration="auto"
          
          anchorOrigin={this.state.anchorOrigin}
          targetOrigin={this.state.targetOrigin}
          canAutoPosition={true}
          onRequestClose={this.handleRequestClose}
          className= ""
         
        >
          <Menu   >
            <MenuItem primaryText="Refresh" />
            <MenuItem  primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Refresh" />
            <MenuItem  primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Refresh" />
            <MenuItem  primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Refresh" />
            <MenuItem  primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Refresh" />
            <MenuItem  primaryText="Help &amp; feedback" />

            
          </Menu>
        </Popover>

      </div>
    );
  }
}
function mapstatetoprops(state){
  return{
    NotificationData:state.NotificationData
  }
}

function mapdispatchtoprops(){
  return{
    
  }
}
 export default connect(mapstatetoprops,mapdispatchtoprops)(Notification);


// import { PureComonent } from 'react'
// import { Popper, Arrow } from 'react-popper'

// export class StandaloneExample extends PureComponent {
//   state = {
//     isOpen: false,
//   }

//   handleClick() = () => {
//     this.setState(prevState => ({
//       isOpen: !prevState.isOpen
//     }))
//   }

//   render() {
//     return (
//       <div>
//         <div
//           ref={(div) => this.target = div}
//           style={{ width: 120, height: 120, background: '#b4da55' }}
//           onClick={this.handleClick}
//         >
//           Click {this.state.isOpen ? 'to hide' : 'to show'} popper
//         </div>
//         {this.state.isOpen && (
//           <Popper className="popper" target={this.target}>
//             Popper Content
//             <Arrow className="popper__arrow"/>
//           </Popper>
//         )}
//       </div>
//     )
//   }
// }