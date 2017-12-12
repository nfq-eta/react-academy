import { constants } from '../../constants';

const initialState = 0;

const score = (state = initialState, action) => {
  switch (action.type) {
    case constants.score.SET:
      return action.payload.score;

    default:
      return state;
  }
};

export default score;
