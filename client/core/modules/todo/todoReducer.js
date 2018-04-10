import { Map } from 'immutable';
import { constants } from '../../constants';

const initialState = Map({});

const todo = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default todo;
