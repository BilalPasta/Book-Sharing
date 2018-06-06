
var initial_state=[];
  


export const ALLPOSTS=(state=initial_state,action)=>{
    console.log('bilal usman');
    switch(action.type){
      case 'ALLPOST':

state=action.payload;


return [...state];
default :
return state;
    }
    return state;
}