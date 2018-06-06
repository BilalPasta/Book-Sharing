import 'react-notifications/lib/notifications.css';
import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import { grey50 } from 'material-ui/styles/colors';
import NotificationBadge from 'react-notification-badge';
import {Effect} from 'react-notification-badge';
 

class Example extends React.Component {
constructor(props){
super(props);
this.state={
Name:'Bilal Usman',
Book:'Numerical Computing'
}
  }
  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Book Name:'+this.state.Book,this.state.Name);
          NotificationManager.info('Info message');
          NotificationManager.info('Info message');
          NotificationManager.info('Info message');
          NotificationManager.info('Info message');
          break;
 
      }
    };
  };
 
  render() {
    return (
      <div>
      
      <IconButton tooltip="Notifications" onClick={this.createNotification('info')}>
        <NotificationsIcon color={grey50}/>
        
<div style={{}}>
  <NotificationBadge count={8} effect={Effect.ROTATE_X}/>
</div>
      </IconButton>
    

        {/* <button className='btn btn-info'
          onClick={this.createNotification('info')}>Info
        </button>
        <hr/>
        <button className='btn btn-success'
          onClick={this.createNotification('success')}>Success
        </button>
        <hr/>
        <button className='btn btn-warning'
          onClick={this.createNotification('warning')}>Warning
        </button>
        <hr/>
        <button className='btn btn-danger'
          onClick={this.createNotification('error')}>Error
        </button>
  */}
        {/* <NotificationContainer enterTimeout={0}  leaveTimeout={0} true/> */}
      </div>
    );
  }
}
 
export default Example;