
import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Auth,SignupimageUrl,CurrentUser} from './reducers/authentication';
import {AlertStatus} from './reducers/alert';
import {ALLPOSTS} from './reducers/post';
import allusers from './reducers/users';
import {CONVERSATION,ALLMESSAGES} from './reducers/messages';

const store = createStore(
    combineReducers ({
        login:Auth,
        alertStatus:AlertStatus,
        imageurl:SignupimageUrl,
        allpost:ALLPOSTS,
        CurrentUser:CurrentUser,
        allusers:allusers,
        CONVERSATION:CONVERSATION,
        alusermessages:ALLMESSAGES
    }),
    {},
    applyMiddleware(thunk)
);
export default  store;