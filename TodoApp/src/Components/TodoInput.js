

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,TextInput,
  View,AsyncStorage,TouchableOpacity,Alert
} from 'react-native';
import Button from 'react-native-button';

import {addtodo,gettodo,dlt} from '../Store/Actions/index';
import Todolist from './TodoList';
import {connect} from 'react-redux';


class TodoInput extends Component {
  
    constructor(props) {
    super(props);
    this.state = { list:[],text:'' };
    this.addtext=this.addtext.bind(this);
  this._handlePress =this._handlePress.bind(this);
    }
  componentWillMount() {
    this.props.gettodo();

  }

  componentWillReceiveProps(nextprops){
    this.setState({
      list:nextprops.Todolist})
      console.log('\n'+'ram');
  }

  
  addtext(){
    this.props.addtodo(this.state.text);
  }
  _handlePress() {
    console.log('Pressed!');
  }
  render() {
    console.log('afeafed');
    return (
    <View style={{flex:1,marginTop:30}}>

       <View style={{flexDirection:'row',justifyContent:'center'}}>
     <TextInput
        style={{height: 40,width:200}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
       
 <Button
        style={{fontSize: 20, color: 'green'}}
        styleDisabled={{color: 'red'}}
        onPress={()=>this.addtext()}>
        Add
      </Button>
      <Button
        style={{fontSize: 20, color: 'green'}}
        styleDisabled={{color: 'red'}}
        onPress={()=>this.props.dlt()}>
 Clear
      </Button>

    </View>
    <Todolist/>
    </View>
    );
  }
}

function mapstatetoprops(state){
return{
  Todolist:state.TodoList
}
}

function mapdispatchtoprops(dispatch){
return{
    addtodo:(text)=> dispatch(addtodo(text)),
    gettodo:()=>dispatch(gettodo()),
    dlt:()=>dispatch(dlt())}
}


export default connect(mapstatetoprops,mapdispatchtoprops)(TodoInput);