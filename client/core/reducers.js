import { combineReducers } from 'redux';
import todo from './modules/todo/todoReducer';

const rootReducer = combineReducers({
  todo
});

export default rootReducer;
