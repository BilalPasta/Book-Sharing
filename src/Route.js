import React from 'react';
import { Route, Router } from 'react-router-dom';
import history from './History';
// import SignIn from './components/login';
// import signup from './components/signup';
// import DatePickerExampleControlled from './components/date';
// import Alert from './components/alertbox';
// import Navigation from './components/navigation';
// import SvgIcon from 'material-ui/SvgIcon/';
// import Maindrawer from './components/drawer';
// import CreateAdd from './components/createAd';
// import HomeNav from  './components/afterloginnavigation';
// import Profile from './components/uploadfile';
// import Notification from './components/Notification';
// import Example from './components/slider';
// import FirstPage from './components/firstpage';
// import Viewadds from './components/viewadds';
// import viewadds from './components/viewadds';
// import login from './components/login';
// import  Slider  from './components/slider';
// import drawer from './components/drawer';
// import Messagelist from './components/messagelist';
// import Users from './chatapp/component/allusers';
// import ChatBOX from './chatapp/component/chatbox';
// // import Personalprofile from './components/setting';
// import Userpost from './components/userpost';
import Booksearch from './components/booksearch';
import {connect} from 'react-redux';
import Home from './pages/Homepage';
import HomeforSignup from './pages/Homepagefrosignup';
import AfterLogin from './pages/afterloginpage';
import ChatBOX from './pages/chatpage';
import moment from 'moment';
import Myadds from './pages/ownadds';
import  PopoverExampleAnimation from './components/notify';
import HomeNav from './components/afterloginnavigation';

class Routes extends React.Component{
    

    render(){
       
        return (
            <Router history={history}>
            <div>
                <Route exact path="/"  component={Home}/>

                <Route exact path="/Signup" component={HomeforSignup} />
                {console.log(this.props.loginstatus,'login')}
                {this.props.loginstatus?( <div>
                        <Route path="/viewadds" component={AfterLogin}/>
                        <Route path="/myadds" component={Myadds}/>
                        <Route path="/chat" component={ChatBOX}/>
                  </div>
                ):('')
                }

                {/* <Route path="/" component={HomeNav
                }/> */}
                {/* {console.log(moment(1527978087469).format(" h:mm a , MM-DD-YY"),'moment')} */}



                {/* <Route exact path="/profile" component={HomeNav}/> */}
                
 {/* <Route exact path="/Signup" component={signup} /> */}

                </div>
            </Router>
        )
    }
}

function mapstatetoprops(state){
return{
    loginstatus:state.login.loginstatus
}
}
function mapdispatchtoprops()
{
return{

}
}
export default connect(mapstatetoprops,mapdispatchtoprops)(Routes);