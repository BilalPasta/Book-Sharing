import fb from '../firebase';
import store from '../index';
export const startAddMessages = (messageObj) => {
    return (dispatch) => {
        // console.log(,'reci');
     let   obj= store.getState().CONVERSATION;
     console.log(userMessages,'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
       obj.messages=userMessages;
       console.log(obj);
         fb.database().ref('messages').push(messageObj).then(()=>{

         })
         console.log(obj,'mmmmmmmmmmmmmmmmmmmm');
         dispatch(Conversation_BTW_(obj.fuid,obj.messages,obj.Profileimageurl));

    };
};

export const Conversation_BTW_=(uid,messages,Profileimageurl)=>{
  return{
        type:'CONVERSATION',
        fuid:uid,
        messages:messages,
        Profileimageurl:Profileimageurl,
        Profileimageurl2:store.getState().CurrentUser.imageurl
}}



// Getting messages from firebase

const getUserMessages = (userMessagesArray) => {
    return {
        type : 'GET_USER_MESSAGES',
        userMessagesArray
    }
};

var  userMessages = [];
export const startGetUserMessages = (authUserFUID) => {

    userMessages=[];
    return (dispatch) => {
       
        fb.database().ref('messages').on('child_added', (messages)=>{
            console.log(messages.val(),'messages');
            messages=messages.val();
            console.log(messages,'kkk');
            // messages.forEach((message)=>{
                console.log(messages);
                console.log(authUserFUID);
                if (messages.senderuid === authUserFUID || messages.recipientuid === authUserFUID) {
                    console.log(messages);
                    userMessages.push({
                        ...messages,
                        messageFID : messages.key,
                    });
                }

            // });
            console.log(userMessages,'uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu');
            dispatch(getUserMessages(userMessages));
        })
    };
};

// Delete message from firebase 

export const deleteMessage = (messageFID) => {
    return () => {
        return fb.database().ref(`messages/${messageFID}`).remove(); 
    }
}


export const updateMessage = (updatedMessageObj) => {
    return () => {
        return fb.database().ref(`messages/${updatedMessageObj.messageFID}`).update(updatedMessageObj); 
    }
}