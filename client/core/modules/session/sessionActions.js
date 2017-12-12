import { constants } from '../../constants';

export const endSession = () => ({
  type: constants.session.END,
});
