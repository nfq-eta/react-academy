import { constants } from '../../constants';

export const endSession = () => ({
  type: constants.session.END,
});

export const restartSession = () => ({
  type: constants.session.RESTART,
});
