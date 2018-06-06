


import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,TextInput,
  View,Button,AsyncStorage,FlatList,SectionList,Header
} from 'react-native';

import {connect} from 'react-redux';

 class Todolist extends React.Component{
     constructor(props){
         super(props);
         this.state={
             list:this.props.Todolist
         }
         
     }
     componentWillReceiveProps(nextprops){
        this.setState({
          list:nextprops.Todolist})
      }
    render(){
        console.log('bilalbilalqasu'+this.state.list);
        // let todos= this.props.Todolist;
        // this.setState({list:todos})

        // console.log(list);
        return(
            <View style={styles.container}>
           
            <FlatList
          data={this.state.list}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        />
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })
  
  function mapstatetoprops(state){
return{
    Todolist:state.TodoList
}
  }
  function mapdispatchtoprops(){
      return{

      }
  }

  export default connect(mapstatetoprops,mapdispatchtoprops)(Todolist);