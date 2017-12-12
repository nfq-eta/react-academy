import { Map } from 'immutable';
import { constants } from '../../constants';

const initialState = Map({});

const deck = (state = initialState, action) => {
  switch (action.type) {
    case constants.deck.ADD_ID:
      return state.setIn(['id'], action.payload.id);

    default:
      return state;
  }
};

export default deck;
