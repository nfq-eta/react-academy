import { constants } from '../../constants';

export const setScore = score => {
  return {
    type: constants.score.SET,
    payload: {
      score
    }
  };
};

export const deleteScore = () => {
  return {
    type: constants.score.DELETE,
    payload: {}
  };
};
