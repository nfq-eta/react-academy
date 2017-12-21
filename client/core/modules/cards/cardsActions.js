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

export const replaceCard = (index, updateData) => {
  return {
    type: constants.cards.REPLACE,
    payload: {
      index,
      updateData,
    }
  }
};


export const resetCards = () => {
  return {
    type: constants.cards.RESET,
    payload: {}
  }
};
