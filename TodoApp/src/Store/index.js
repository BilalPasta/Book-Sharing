
import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import todos from './Reducers/todos';

const store=createStore(
    combineReducers({TodoList:todos}),applyMiddleware(thunk)
);

export default  store;