import { Map } from 'immutable';
import { constants } from '../../constants';

const initialState = Map({});

const session = (state = initialState, action) => {
  switch (action.type) {
    case constants.session.END:
      return state.setIn(['ended'], true);

    case constants.session.RESTART:
      return state.setIn(['ended'], false);

    case constants.session.SET_ACTIVE_PLAYER:
      return state.setIn(['activePlayer'], action.payload.player);

    case constants.session.SET_ACTIVE_GAME:
      return state.setIn(['activeGame'], action.payload.game);

    default:
      return state;
  }
};

export default session;
