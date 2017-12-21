import { List } from 'immutable';
import { constants } from '../../constants';

const initialState = List([]);

const cards = (state = initialState, action) => {
  switch (action.type) {
    case constants.cards.ADD:
      return state.push(action.payload.card);

    case constants.cards.REPLACE:
      return state.update(action.payload.index, () => action.payload.updateData);

    case constants.cards.RESET:
      return initialState;

    default:
      return state;
  }
};

export default cards;
