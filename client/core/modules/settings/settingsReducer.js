import { Map } from 'immutable';
import { constants } from '../../constants';

const initialState = Map({
  players: 1,
  games: 1
});

const settings = (state = initialState, action) => {
  switch (action.type) {
    case constants.settings.INCREASE_VALUE:
      return state.set(action.payload.type, state.get(action.payload.type) + 1);

    case constants.settings.DECREASE_VALUE:
      return state.set(action.payload.type, state.get(action.payload.type) - 1);

    default:
      return state;
  }
};

export default settings;
