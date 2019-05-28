
var initial_state=[];
  


export const ALLPOSTS=(state=initial_state,action)=>{
    console.log('bilal usman');
    switch(action.type){
      case 'ALLPOST':
      console.log(action,'pppooo');

state=action.payload;

console.log(...state,'state');
return [...state];
default :
return state;
    }
    return state;
}