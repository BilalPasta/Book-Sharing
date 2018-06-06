
import React, { Component } from 'react';
import '.././App.css';
import { Container, Row, Col } from 'reactstrap';
import { deepPurple500, cyan900, red500, yellow500, blue500,indigo900,grey50 } from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Button } from 'reactstrap';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import SvgIcon from 'material-ui/SvgIcon';
import RaisedButton from 'material-ui/RaisedButton';
import fb from '../store/firebase';
import Googlelogin from './loginfromgoogle';
import Facebooklogin from './loginfromfacebook';
import Alert from './alertbox';
import {login,handleClose,CurrentuserDetails} from '../store/action/index';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
// import Dialog from 'material-ui/Dialog';
// import FlatButton from 'material-ui/FlatButton';

const styless = {
    margin: 12,
    backgroundColor: indigo900
};
const styles = {
    underlineStyle: {
        borderColor: indigo900, color: indigo900
    },
    floatingLabelFocusStyle: {
        color: indigo900,

    }
}



class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            alert: false,
            message: ''
        }

        this.Change = this.Change.bind(this);
        this.login=this.login.bind(this);
        // this.handleClose=this.handleClose.bind(this);
        // this.handleOpen=this.handleOpen.bind(this);
    }
    login(){
        // alert('chllla');
        this.props.signin(this.state);
    }
    componentWillReceiveProps(nextProps){
    this.setState({
        message : nextProps.Logindetails.message,
        alert: nextProps.Logindetails.alert});
        console.log('chl gya',this.state);
    
    }
    

    Change(event) {
        this.setState({ [event.target.name]: event.target.value });
        console.log(event.target.value);

    }
   



    render() {
        
      
        console.log(this.props,'props');
        console.log(this.state,'state');
        return (
          
        <div className="App">
   

            <Container>

                <Row className="">
                    <Col sm="12"  >

                        <MuiThemeProvider >

                            <div className="" >
                                <Card>
                                    <br/>
                                    <h2 className="head">SIGN IN</h2>
                                <CardActions>
                                <Googlelogin /> 
                                <Facebooklogin/>
                                {(this.props.Logindetails.alert)?(<Alert open={this.state.alert} message={this.state.message} handleClose={this.props.handleClose}/>):('') }
</CardActions>
                                    
                                    <TextField
                                        onChange={this.Change}
                                        name="email"
                                        underlineFocusStyle={styles.underlineStyle}
                                        type="email"
                                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                        autoComplete="off"
                                        style={{width:'80%'}}
                                        floatingLabelText="Email"
                                         floatingLabelStyle={{fontSize:'16px'}}
                                    /><br />
                                    <TextField
                                        onChange={this.Change}
                                        name="password"
                                        underlineFocusStyle={styles.underlineStyle}
                                        type="password"
                                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                        autoComplete="off"
                                        style={{width:'80%'}}
                                        floatingLabelStyle={{fontSize:'16px'}}
                                        floatingLabelText="Password"


                                    /><br />
                                    <RaisedButton label={<b>SIGNIN</b>} labelStyle={{fontSize:'15px'}}  style={{height:'25px'}} backgroundColor={indigo900} disabled={this.state.email!=''&&this.state.password!=''?(false):(true)} labelColor={grey50} onClick={this.login} />
<br/>
                                    <CardText>
                                    <Link to="/Signup" style={{fontSize:"small",textDecoration:'none',fontSize:'14px',color:'#32508E'}}>Dont have Account</Link>

                                    </CardText>
                                    
                                </Card>
                            </div>
                        </MuiThemeProvider>
                    </Col>


                </Row>

            </Container>
        </div>
        );
    }
}




function mapstatetoprops(state){
    return{
        Logindetails:state.login
    }
}
function mapdispatchtoprops(dispatch){
    return{
        signin:(obj)=>{
            dispatch(login(obj));
        },
        handleClose:()=>{
            dispatch(handleClose());
        },
        CurrentuserDetails:(userinfo)=>{
            dispatch(CurrentuserDetails(userinfo));
        }
    }
}
export default connect(mapstatetoprops,mapdispatchtoprops)(SignIn);