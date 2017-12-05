export const getCardNumberValue = value => {
  switch (value) {
    case 'KING':
    case 'QUEEN':
    case 'JACK':
      return 10;

    case 'ACE':
      return 1;

    default:
      return parseInt(value);
  }
};
