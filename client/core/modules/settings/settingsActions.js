import { constants } from '../../constants';

export const increaseSettingValue = type => ({
  type: constants.settings.INCREASE_VALUE,
  payload: {
    type
  }
});

export const decreaseSettingValue = type => ({
  type: constants.settings.DECREASE_VALUE,
  payload: {
    type
  }
});
