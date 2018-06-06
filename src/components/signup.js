
import React, { Component } from 'react';
import '.././App.css';
import { Container, Row, Col } from 'reactstrap';
import { deepPurple500, cyan900, red500, yellow500, blue500, indigo900, grey50 } from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Button } from 'reactstrap';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import SvgIcon from 'material-ui/SvgIcon';
import RaisedButton from 'material-ui/RaisedButton';
import fb from '../store/firebase';
import Alert from './alertbox';
import DatePicker from 'material-ui/DatePicker';
import history from '../History';
import Profile from './uploadfile';
import { connect } from 'react-redux';
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

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            username: '',
            open: false,
            message: '',
            contact: '',
            Institute: '',
            Profileimageurl: ''
        }


        this.Change = this.Change.bind(this);
        this.Signup = this.Signup.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            Profileimageurl: nextProps.imageurl.url
        });
    }




    Change(event) {
        this.setState({ [event.target.name]: event.target.value });
        console.log(event.target.value);

    }
  

    handleOpen = (message) => {
        this.setState({ open: true, message: message });
    };

    componentWillUnmount() {
        this.setState({
            email: '',
            password: '',
            username: '',
            open: false,
            message: '',
            contact: '',
            Institute: '',
            Profileimageurl: ''

        })
    }
    handleClose = () => {
        this.setState({ open: false });

    };

    Signup() {

        if (this.state.email != '' && this.state.password != '' && this.state.username != '' && this.state.Institute != ''
        
        && this.state.contact != '' && this.state.Profileimageurl != '') {
            fb.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
                let obj = this.state;
                delete obj.message;
                delete obj.open;
                fb.database().ref('/').child(`users`).push({ ...obj, uid: user.uid }).then(() => {
                    this.handleOpen("Signup Successfully");
                    user.updateProfile({
                        displayName: this.state.username,
                        photoURL: this.state.Profileimageurl,
                        identifierNumber: this.state.contact
                    }).then(function () {
                        console.log(user, 'profile');

                    })
                    history.push('/');

                }).catch(function (error) {
                    this.handleOpen(error.message);
                })


            }).catch((error) => {
                this.handleOpen(error.message,'kia hua');
            })


        } else {
            this.setState({ message: 'Plz Complete All details', open: true }
            )
        }
    }




    render() {
        return (<div className="App1">
            <MuiThemeProvider >
                <div  >
                    {/* <Alert open={this.state.open} handleClose={this.handleClose} message={this.state.message} /> */}
                    <Card>
                        <h2 className="head">SIGN UP</h2>

                        <Container>

                            <Row className='signup'>
                                <Col sm="5"  >

                                    <TextField autoComplete="off"
                                        onChange={this.Change}
                                        name="username"
                                        underlineFocusStyle={styles.underlineStyle}
                                        type="text"
                                        style={{ width: '80%' }}
                                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                        floatingLabelText="UserName"
                                        floatingLabelStyle={{fontSize:'16px'}}

                                    /><br />
                                    <TextField
                                        onChange={this.Change}
                                        name="email" autoComplete="off"
                                        underlineFocusStyle={styles.underlineStyle}
                                        type="email"
                                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                        style={{ width: '80%' }}
                                        floatingLabelText="Email"
                                        floatingLabelStyle={{fontSize:'16px'}}                                    /><br />


                                    <br />

                                    <TextField
                                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                        onChange={this.Change}
                                        name="password" autoComplete="off"
                                        underlineFocusStyle={styles.underlineStyle}
                                        type="password"
                                        style={{ width: '80%' }}
                                        floatingLabelText="Password"
                                        floatingLabelStyle={{fontSize:'16px'}}
                                    />

                                </Col>

                                <Col sm="5">



                                    {/* {console.log(this.props.url)} */}
                                    <TextField
                                        onChange={this.Change}
                                        name="contact"
                                        underlineFocusStyle={styles.underlineStyle}
                                        type="number"
                                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                        floatingLabelText="Contact"
                                        style={{ width: '80%' }}

                                        floatingLabelStyle={{fontSize:'16px'}}                                    /><br />
                                    <TextField
                                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                        onChange={this.Change}
                                        name="Institute"
                                        underlineFocusStyle={styles.underlineStyle}
                                        type="text"
                                        style={{ width: '80%' }}
                                        floatingLabelText="Institute"
                                        floatingLabelStyle={{fontSize:'16px'}}                                    /><br />
                                    <p>Profile Image</p>
                                    <Profile />
                                </Col>

                            </Row>
    
                            <RaisedButton label={<b>Register</b>} labelStyle={{ fontSize: '14px' }} style={{ height: '25px' }} backgroundColor={indigo900} labelColor={grey50} disabled={(this.state.email != '' && this.state.password != '' && this.state.username != '' && this.state.Institute != ''   && this.state.contact != '' && this.state.Profileimageurl != '')?(false):(true)} onClick={this.Signup} />

                        </Container>
                        <br />
                    </Card>
                </div>
            </MuiThemeProvider>
        </div>
        );
    }
}

function mapstatetoprops(state) {
    return {
        imageurl: state.imageurl
    }
}
function mapdispatchtoprops() {
    return {}
}

export default connect(mapstatetoprops, mapdispatchtoprops)(Signup);

