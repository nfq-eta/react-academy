export const baseURL = 'https://deckofcardsapi.com';

export const endpoint = {
  createDeck: deckCount => `api/deck/new/shuffle/?deck_count=${deckCount || 1}`,
  draw: (deckId, cardNumberToDraw) => `api/deck/${deckId || 'new'}/draw/?count=${parseInt(cardNumberToDraw) || 1}`,
};
