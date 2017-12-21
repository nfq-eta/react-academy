import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import cards from './modules/cards/cardsReducer';
import score from './modules/score/scoreReducer';
import deck from './modules/deck/deckReducer';
import session from './modules/session/sessionReducer';
import settings from './modules/settings/settingsReducer';

const rootReducer = combineReducers({
  routing,
  score,
  cards,
  session,
  settings,
  deck
});

export default rootReducer;

const store = {
  cards: [
    {
      image: 'https://deckofcardsapi.com/static/img/KH.png',
      value: '10'
    },
    {
      image: 'https://deckofcardsapi.com/static/img/8C.png',
      value: '8'
    },
  ],
  score: 18,
  ended: false
};
