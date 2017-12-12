import React from 'react';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { requestCard } from '../../core/modules/cards/cardsActions';
import { createDeck } from '../../core/modules/deck/deckActions';
import { endSession, restartSession } from '../../core/modules/session/sessionActions';

class App extends React.Component {
  componentWillMount() {
    this.props.onCreateDeck();
  }
  render() {
    return (
      <div className="app-container">
        {this.props.sessionEnded ?
          <div className="score">
            {this.props.score <= 21 ?
              <span>You won with {this.props.score}!</span>
              :
              <span>You lost with {this.props.score}!</span>
            }
            <Button title="Restart" click={() => this.props.onRestartSession()}/>
          </div>
          : null
        }

        <div className="results">
          Your score: <span className="results__number">{this.props.score}</span>
        </div>

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
            <Button
              title="Add card"
              disable={!this.props.deckId || this.props.sessionEnded}
              click={() => this.props.onRequestCard()}
            />
            <Button
              title="Stop"
              disable={this.props.sessionEnded || this.props.score === 0}
              className="is-success"
              click={() => this.props.onEndSession()}
            />
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cards,
  deckId: state.deck.get('id'),
  score: state.score,
  sessionEnded: state.session.get('ended')
});

const mapDispatchToProps = dispatch => ({
  onRequestCard: (cardCount) => dispatch(requestCard(cardCount)),
  onCreateDeck: () => dispatch(createDeck()),
  onEndSession: () => dispatch(endSession()),
  onRestartSession: () => dispatch(restartSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
