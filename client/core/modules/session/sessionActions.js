import { constants } from '../../constants';

export const endSession = () => ({
  type: constants.session.END,
  payload: {}
});

export const restartSession = () => ({
  type: constants.session.RESTART,
  payload: {}
});
