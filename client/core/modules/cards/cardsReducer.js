import { Map } from 'immutable';
import { constants } from '../../constants';

const initialState = Map({});

const cards = (state = initialState, action) => {
  switch (action.type) {
    // case constants.cards:
    //   return state;

    default:
      return state;
  }
};

export default cards;
