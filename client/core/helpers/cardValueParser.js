export const getCardNumberValue = value => {
  switch (value) {
    case 'KING':
    case 'QUEEN':
    case 'JACK':
      return 10;

    case 'ACE':
      return 11;

    default:
      return parseInt(value);
  }
};
