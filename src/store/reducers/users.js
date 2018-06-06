const defaultState = {
    allUsers : [],
    onlineUsers: [],
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_ALL_USERS':
        console.log(action.allUsersArray,'aaaaaaaaaaaaaaaaaaaalllllllllllllllllllllllllllllllllllllllllllll');
            return {
                ...state,
                allUsers: action.allUsersArray,
            };
        case 'GET_ONLINE_USERS' :
            return {
                ...state,
                onlineUsers : [],
            };
        default:
            return state;
    };
};
