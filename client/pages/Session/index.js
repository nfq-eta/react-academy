import React from 'react';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { requestCard } from '../../core/modules/cards/cardsActions';
import { createDeck } from '../../core/modules/deck/deckActions';
import { endSession, restartSession } from '../../core/modules/session/sessionActions';

class Session extends React.Component {
  componentWillMount() {
    this.props.onCreateDeck();
  }
  render() {
    return (
      <div>
        <div className="info">
          <span>Player: 1</span>
          <span>Game: 1</span>
        </div>

        <div className="quit">
          Quit
        </div>

        {this.props.sessionEnded ?
          <div className="score">
            <div className="score-wrap">
              {this.props.score <= 21 ?
                <span>You won with {this.props.score}!</span>
                :
                <span>You lost with {this.props.score}!</span>
              }
              <Button title="Restart" click={() => this.props.onRestartSession()}/>
            </div>
          </div>
          : null
        }

        <div className="results">
          Your score: <span className="results__number">{this.props.score}</span>
        </div>

        <div className="play-area">

          <div className="play-area-cards">
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

        <div className="player-scores">
          <div className="player-scores-item">
            <table>
              <thead>
              <tr>
                <th>
                  Game 1
                </th>
              </tr>
              </thead>

              <tbody>
              <tr>
                <td>Player 1:</td>
                <td>13</td>
              </tr>
              <tr>
                <td>Player 2:</td>
                <td>13</td>
              </tr>
              </tbody>
            </table>
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
)(Session);
