import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <div className="play-area">

          <div className="play-area-cards">
            <div className="play-area-cards__deck">
              Deck
            </div>

            <div className="play-area-cards__items">
              Cards
            </div>
          </div>

          <div className="play-area__actions">
            Buttons
          </div>

        </div>
      </div>
    );
  }
}
