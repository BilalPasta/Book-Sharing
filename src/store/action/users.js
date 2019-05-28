import fb from '../firebase';
import store from '../index';
import { CurrentUser } from '../reducers/authentication';
const getAllUsersAction = (allUsersArray) => {
    return {
        type: 'GET_ALL_USERS',
        allUsersArray,
    }
};

export const startGetAllUsersAction = (authUserFUID) => {
    console.log(authUserFUID,'authUserFUID');
    console.log('agyachln bhjknkjkkkkkkkkkkkkkkkkkkkjjjj');
    return (dispatch) => {
        return fb.database().ref(`/`).child('users').on('value', (users) => {
            var CurrentUseruid=store.getState().CurrentUser.uid;

            // console.log(users.val(),'uuuuuu');
            const allUsersArray = [];
            // let user;
            users.forEach((user) => {
               
               
                // console.log(user,'llll');
                // let  user=users.val();

                if ( user.val().uid != CurrentUseruid) {
                    allUsersArray.push(user.val());
                }
            });
            dispatch(getAllUsersAction(allUsersArray))
        });
    };
}