import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Route';
import {Provider} from 'react-redux';
import store from './store/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();



class App extends Component {

  render() {
    return (
      
      <Provider store={store}>
    <MuiThemeProvider>
      <Routes />
      </MuiThemeProvider>

      </Provider>
    );
  }
}

export default App;
