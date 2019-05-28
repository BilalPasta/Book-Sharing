import fb from '../firebase';
import store from '../index';

export const startAddMessages = (messageObj) => {
    return (dispatch) => {
     let   obj= store.getState().CONVERSATION;
     obj.uid=obj.fuid;
     obj.username=obj.recipientname;
         fb.database().ref('/').child('messages').push(messageObj).then(()=>{
            dispatch(Conversation_BTW_(userMessages,obj));
            console.log(obj,'mmmmmmmmmmmmmmmmmmmmmmmmm');

         })

    };
};


export const Conversation_BTW_=(message,obj)=>{
    
  return{
        type:'CONVERSATION',
        fuid:obj.uid,
        messages:message,
        Profileimageurl:obj.Profileimageurl,
        Profileimageurl2:store.getState().CurrentUser.imageurl,
        recipientname:obj.username
}}



// Getting messages from firebase

const getUserMessages = (userMessagesArray) => {
    return {
        type : 'GET_USER_MESSAGES',
        userMessagesArray
    }
};

const message_for_notify=()=>{
    console.log(notification_messages,'messagessssssssssssssss');
    return{
    type:'NOTICATIONMESSAGE',
message:notification_messages}
} 

var  userMessages = [];
let notification_messages=[];
export const startGetUserMessages = (authUserFUID) => {

    userMessages=[];
    return (dispatch) => {
       
        fb.database().ref('messages').on('child_added', (messages)=>{
            console.log(messages.val(),'messages');
            messages=messages.val();
            console.log(messages,'kkk');
                console.log(messages);
                console.log(authUserFUID);
                if(messages.recipientuid==authUserFUID&&messages.seen==false){
                    notification_messages.push(messages);
                    dispatch(message_for_notify(notification_messages));
                }
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