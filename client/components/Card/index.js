import React from 'react';

const Card = ({ deck, value, image }) => {
  const deckImage = 'http://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-2_grande.png?v=1494193481';

  return (
    <div className="card">
      <div className="card__value">{value}</div>
      <div className="card__image"
           style={{
             backgroundImage: `url(${deck ? deckImage : image})`
           }}
      />
    </div>
  );
};

export default Card;
