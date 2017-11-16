import { combineReducers } from 'redux';
import cards from './modules/cards/cardsReducer';

const rootReducer = combineReducers({
  cards
});

export default rootReducer;
