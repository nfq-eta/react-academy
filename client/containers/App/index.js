import React from 'react';
import Button from '../../components/Button';
import Card from '../../components/Card';

export default class App extends React.Component {
  constructor() {
    super();

    this.onAddCard = this.onAddCard.bind(this);
    this.onRemoveAllCards = this.onRemoveAllCards.bind(this);

    this.state = {
      cards: [
        { value: 1 }
      ]
    };
  }
  onAddCard() {
    const { cards } = this.state;

    cards.push({ value: 1 });

    this.setState({
      cards
    });
  }
  onRemoveAllCards() {
    this.setState({
      cards: []
    })
  }
  render() {
    return (
      <div className="app-container">
        <div className="play-area">

          <div className="play-area-cards">
            <div className="play-area-cards__deck">
              <Card deck value={52}/>
            </div>

            <div className="play-area-cards__items">
              {this.state.cards.map((card, i) => {
                return (
                  <Card key={i} value={card.value}/>
                );
              })}
            </div>
          </div>

          <div className="play-area__actions">
            <Button title="Add card" click={this.onAddCard}/>
            <Button title="Remove cards" click={this.onRemoveAllCards}/>
          </div>

        </div>
      </div>
    );
  }
}
