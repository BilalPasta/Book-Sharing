import fb from '../firebase';

import {
    Platform,
    StyleSheet,
    Text,TextInput,
    View,Button,AsyncStorage
  } from 'react-native';



  export function gettodo(){
var todolist=[];
    return dispatch=>{
      fb.database().ref('TODOS').on('child_added',(snap)=>{
     var todos=snap.val();
todolist.push(todos);
dispatch({type:'GETTODOS',payload:todolist});

      });
      
    }
  }


export function addtodo(text){
  return  dispatch=>{

fb.database().ref('/').child('TODOS').push(text);
dispatch({type:'ADDTODO',payload:text});}}


export function dlt(){
  return dispatch=>{
fb.database().ref('TODOS').remove();
// dispatch({type:'DELETETODO',payload:[]});
  }
}