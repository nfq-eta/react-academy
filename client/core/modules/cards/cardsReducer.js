import { Map } from 'immutable';
import { constants } from '../../constants';

const initialState = Map({});

const cards = (state = initialState, action) => {
  switch (action.type) {
    case constants.cards.ADD:
      return state.setIn(['main'], action.payload.card);

    default:
      return state;
  }
};

export default cards;
