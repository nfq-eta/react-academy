import { constants } from '../../constants';

export const endSession = () => ({
  type: constants.session.END,
  payload: {}
});

export const restartSession = () => ({
  type: constants.session.RESTART,
  payload: {}
});

export const setActivePlayer = player => ({
  type: constants.session.SET_ACTIVE_PLAYER,
  payload: {
    player
  }
});

export const setActiveGame = game => ({
  type: constants.session.SET_ACTIVE_GAME,
  payload: {
    game
  }
});

export const setNextActivePlayer = player => ({
  type: constants.session.SET_NEXT_ACTIVE_PLAYER,
  payload: {
    player
  }
});

export const setNextActiveGame = game => ({
  type: constants.session.SET_NEXT_ACTIVE_GAME,
  payload: {
    game
  }
});
