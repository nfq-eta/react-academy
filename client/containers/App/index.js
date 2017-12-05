import React from 'react';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { requestCard } from '../../core/modules/cards/cardsActions';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <div className="score won">
          Your won with 12!
          <Button title="Restart" click={() => null}/>
        </div>

        <div className="results">Your score: <span className="results__number">12</span></div>

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
            <Button title="Stop" className="is-success" click={() => null}/>
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
