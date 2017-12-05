import { constants } from '../../constants';

export const requestCard = () => {
  return {
    type: constants.cards.REQUEST,
    payload: {
      limit: 2
    }
  }
};

export const addCard = (card) => {
  return {
    type: constants.cards.ADD,
    payload: {
      card
    }
  }
};
