import React from 'react';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { requestCard } from '../../core/modules/cards/cardsActions';
import { createDeck } from '../../core/modules/deck/deckActions';
import { endSession } from '../../core/modules/session/sessionActions';

class App extends React.Component {
  componentWillMount() {
    this.props.onCreateDeck();
  }
  render() {
    return (
      <div className="app-container">
        {this.props.sessionEnded ?
          <div className="score won">
            Your won with 12!
            <Button title="Restart" click={() => null}/>
          </div>
          : null
        }

        <div className="results">Your score: <span className="results__number">12</span></div>

        <div className="play-area">

          <div className="play-area-cards">
            <div className="play-area-cards__deck">
              <Card deck value={52}/>
            </div>

            <div className="play-area-cards__items">
              {this.props.cards ?
                this.props.cards.map((card, i) => (
                  <Card value={card.value} key={i} image={card.image}/>
                ))
                : null
              }
            </div>
          </div>

          <div className="play-area__actions">
            <Button title="Add card" disable={!this.props.deckId} click={() => this.props.onRequestCard(3)}/>
            <Button title="Stop" className="is-success" click={() => this.props.onEndSession()}/>
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cards,
  deckId: state.deck.get('id'),
  sessionEnded: state.session.get('ended')
});

const mapDispatchToProps = dispatch => ({
  onRequestCard: (cardCount) => dispatch(requestCard(cardCount)),
  onCreateDeck: () => dispatch(createDeck()),
  onEndSession: () => dispatch(endSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
