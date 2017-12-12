import { Map } from 'immutable';
import { constants } from '../../constants';

const initialState = Map({});

const session = (state = initialState, action) => {
  switch (action.type) {
    case constants.session.END:
      return state.setIn(['ended'], true);

    case constants.session.RESTART:
      return state.setIn(['ended'], false);

    default:
      return state;
  }
};

export default session;
