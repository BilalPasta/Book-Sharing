import React from 'react';
import { Route, Router } from 'react-router-dom';
import history from './History';
import Slider from './components/imageslider/Slider';
import ChatWidget from './components/chatWidget';
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
// import Booksearch from './components/booksearch';
import  PopoverExampleAnimation from './components/notify';
import HomeNav from './components/afterloginnavigation';
import abc from './components/abc';
// import SliderMenu from './components/sideMenu';
import MenuList from './components/SideMenu';
import ChatWindow from './components/chatWindow';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
//navbar icons
import fterlogin from './components/afterloginnavigation';
import Hom from './components/images/home.png';
import ContactUs from './components/images/contact-us.png';
import AboutUs from './components/images/about-us.png';
import Signup from './components/images/sign-up.png';
import AboutUsPage from './components/AboutUs';
import Contact from './components/Contact.js';
import TopbarNav from './components/TopNav';
import ContactNo from './components/ContactNumber';
import Getcontact from './components/GetContactNofromsocialAccount'
class Routes extends React.Component{
    

    render(){
       
        return (
            <Router history={history}>
            <div>
                <Route exact path="/" component={Home} />

              <Route exact path="/Signup" component={HomeforSignup} />
              <Route exact path="/about" component={AboutUsPage}/>
              <Route exact path="/contact" component={Contact}/>
                {console.log(this.props.loginstatus,'login')}
                {this.props.loginstatus?( <div>
                        <Route path="/viewadds" component={AfterLogin}/>
                        <Route path="/myadds" component={Myadds}/>
                        <Route path="/chat" component={ChatBOX}/>
                  </div>
                ):('') 
                }

                

                </div>
            </Router>
//             <Router history={history}>
//     <Route render={({ location, history }) => (
//         <React.Fragment>
//             <SideNav
//                 onSelect={(selected) => {
//                     const to = '/' + selected;
//                     if (location.pathname !== to) {
//                         history.push(to);
//                     }
//                 }}
//             >
//                 <SideNav.Toggle />
//                 <SideNav.Nav defaultSelected="">
//                     <NavItem eventKey="">
//                         <NavIcon>
//                             <img src={Hom}/>

//                         </NavIcon>
//                         <NavText>
//                             HOME
//                         </NavText>
//                     </NavItem>
//                     <NavItem eventKey="about">
//                         <NavIcon>
//                             <img src={AboutUs}/>
//                         </NavIcon>
//                         <NavText>
//                             ABOUT
//                         </NavText>
//                     </NavItem>
//                     <NavItem eventKey="contact">
//                         <NavIcon>
//                             <img src={ContactUs}/>
//                         </NavIcon>
//                         <NavText>
//                             CONTACT
//                         </NavText>
//                     </NavItem>
//                     <NavItem eventKey="Signup">
//                         <NavIcon>
//                             <img src={Signup}/>

//                         </NavIcon>
//                         <NavText>
//                             SIGNUP
//                         </NavText>
//                     </NavItem>
//                 </SideNav.Nav>
//             </SideNav>
//             <main>
//                 <Route path="/" exact component={props => <Home/>} />
//                 <Route path="/about" component={props => <AboutUsPage />} />
//                 <Route path="/contact" component={props => <AfterLogin />} />
//                 <Route path="/Signup" component={props => <AfterLogin />} />


//             </main>
//         </React.Fragment>
//     )}
//     />
// </Router>
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