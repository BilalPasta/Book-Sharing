// import '.././App.css';
// import React from 'react';
// import RaisedButton from 'material-ui/RaisedButton';
// import RadioButton from 'material-ui/RadioButton';
// import Popover from 'material-ui/Popover/Popover';
// import {Menu, MenuItem} from 'material-ui/Menu';
// import IconButton from 'material-ui/IconButton';
// import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

// import { deepPurple500, cyan900, red500, yellow500, blue500,indigo900,grey50 } from 'material-ui/styles/colors';

// const styles = {
 
//   block: {
//     display: 'flex',
//   },
//   block2: {
//     margin: 10,
//   },
//   pre: {
//     overflow: 'hidden', // Fix a scrolling issue on iOS.
//   },
// };



// export default class Notification extends React.Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       open: false,
//       anchorOrigin: {
//         horizontal: 'right',
//         vertical: 'bottom',
//       },
//       targetOrigin: {
//         horizontal: 'right',
//         vertical: 'top',
//       },
//     };
//   }

//   handleClick = (event) => {
//     // This prevents ghost click.
//     event.preventDefault();
//     this.setState({
//       open: true,
//       anchorEl: event.currentTarget,
//     });
//   };

//   handleRequestClose = () => {
//     this.setState({
//       open: false,
//     });
//   };

//   setAnchor = (positionElement, position) => {
//     const {anchorOrigin} = this.state;
//     anchorOrigin[positionElement] = position;

//     this.setState({
//       anchorOrigin: anchorOrigin,
//     });
//   };

//   setTarget = (positionElement, position) => {
//     const {targetOrigin} = this.state;
//     targetOrigin[positionElement] = position;

//     this.setState({
//       targetOrigin: targetOrigin,
//     });
//   };

//   render() {
//     return (
//       <div className="">
//      <IconButton  onClick={this.handleClick}>
//      <NotificationsIcon  color={grey50}/>
//         </IconButton> 
//         <Popover
//           open={this.state.open}
//           anchorEl={this.state.anchorEl}
//           anchorOrigin={this.state.anchorOrigin}
//           targetOrigin={this.state.targetOrigin}
//           onRequestClose={this.handleRequestClose}
         
//           className= "abc1"
         
//         >
//         {console.log(screen.width)}
//           <Menu  style={{maxHeight:"300px"}} width="35%">
//             <MenuItem primaryText="Refresh" />
//             <MenuItem  primaryText="Help &amp; feedback" />
//             <MenuItem primaryText="Refresh" />
//             <MenuItem  primaryText="Help &amp; feedback" />
//             <MenuItem primaryText="Refresh" />
//             <MenuItem  primaryText="Help &amp; feedback" />
//             <MenuItem primaryText="Refresh" />
//             <MenuItem  primaryText="Help &amp; feedback" />
//             <MenuItem primaryText="Refresh" />
//             <MenuItem  primaryText="Help &amp; feedback" />

            
//           </Menu>
//         </Popover>

//       </div>
//     );
//   }
// }


const popoverTop = (
  <Popover id="popover-positioned-top" title="Popover top">
    <strong>Holy guacamole!</strong> Check this info.
  </Popover>
);
const modifiers= {
  flip: {
    behavior: "flip",
    enabled: true
  }

}
import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import OverlayTrigger from 'react'
export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div>
        <Button id="abc" onClick={this.toggle}>
          Launch Popover
        </Button>Popover1


        <Popover
         modifiers={{flip: {enabled: false}}}>

         {props.children}
            id="popover-basic" placement="bottom" isOpen={this.state.popoverOpen} target="abc" toggle={this.toggle}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>Sed posuere consectetur est at lobortis. lknlklklkl Lorem    kjkjhhhkh kjnbkj nkbkjbnkjkbn 
            jhjh 
            jkjbjbkjbkj
            jnjkkkjnkjnAenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
        </Popover>
      </div>
    );
  }
}