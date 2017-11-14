import React from 'react';

const Card = ({ deck, value }) => {
  const deckImage = 'http://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-2_grande.png?v=1494193481';
  const cardImage = 'https://deckofcardsapi.com/static/img/8C.png';

  return (
    <div className="card">
      <div className="card__value">{value}</div>
      <div className="card__image"
           style={{
             backgroundImage: `url(${deck ? deckImage : cardImage})`
           }}
      />
    </div>
  );
};

export default Card;
