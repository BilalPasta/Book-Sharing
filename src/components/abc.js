import Popover from 'react-simple-popover';
import React, { Component } from 'react';
 
export default class PopoverDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
 
  handleClick(e) {
    
    this.setState({open: true});
    alert(this.state.open)
  }
 
  handleClose(e) {
    this.setState({open: false});
  }
 
  render() {
    return (
      <div>
        <button
         
          ref="target"
          onClick={this.handleClick.bind(this)}>Popover</button>
        <Popover
          placement='left'
          container={this}
          target={this.refs.target}
          show={this.state.open}
          onHide={this.handleClose.bind(this)} >
          <p>This is popover</p>
        </Popover>
      </div>
    );
  }
}