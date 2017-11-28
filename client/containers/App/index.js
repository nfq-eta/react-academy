import React from 'react';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { requestCard } from '../../core/modules/cards/cardsActions';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <div className="play-area">

          <div className="play-area-cards">
            <div className="play-area-cards__deck">
              <Card deck value={52}/>
            </div>

            <div className="play-area-cards__items">
              {this.props.cards ?
                this.props.cards.map(card => (
                  <Card value={card.value} image={card.image}/>
                ))
                : null
              }
            </div>
          </div>

          <div className="play-area__actions">
            <Button title="Add card" click={() => this.props.onRequestCard()}/>
            <Button title="Remove cards" click={this.onRemoveAllCards}/>
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cards
});

const mapDispatchToProps = dispatch => ({
  onRequestCard: (card) => dispatch(requestCard(card))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
