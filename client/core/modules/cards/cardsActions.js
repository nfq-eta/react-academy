import { constants } from '../../constants';

export const requestCard = cardCount => {
  return {
    type: constants.cards.REQUEST,
    payload: {
      cardCount
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
