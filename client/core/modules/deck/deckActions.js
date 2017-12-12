import { constants } from '../../constants';

export const createDeck = () => {
  return {
    type: constants.deck.CREATE,
    payload: {}
  }
};

export const addDeckId = (id) => {
  return {
    type: constants.deck.ADD_ID,
    payload: {
      id
    }
  }
};
