import { constants } from '../../constants';

export const requestCard = () => {
  return {
    type: constants.cards.REQUEST,
    payload: {}
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
