import { List } from 'immutable';
import { constants } from '../../constants';

const initialState = List([]);

const cards = (state = initialState, action) => {
  switch (action.type) {
    case constants.cards.ADD:
      return state.push(action.payload.card);

    default:
      return state;
  }
};

export default cards;
