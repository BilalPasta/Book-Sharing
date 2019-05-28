import React from 'react';
import Bounce from 'react-reveal/Bounce';
class ContactNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
        
        <div>
      
      <h3>
        <div >
        <Bounce top opposite cascade collapse when={this.state.show}>
         {this.props.UserNumber}
        </Bounce>
        </div>
        <div>
        <button
          className="btn btn-success my-5"
          type="button"
          onClick={this.handleClick}
          style={{marginLeft:'20px',backgroundColor:'#10102a',border:' 1px solid black'}}
        >
          { this.state.show ? 'THANKS ' : 'CONTACT ME' } 
        </button>
        </div>
        </h3>
      </div>
    );
  }
}

export default ContactNumber;