import React from 'react';
import { connect } from 'react-redux';
import { decreaseSettingValue, increaseSettingValue } from '../../core/modules/settings/settingsActions';

class Settings extends React.Component {
  increaseValue(activeValue, type) {
    if (type === 'players' && activeValue < 4) this.props.onIncreaseSetting('players');
    if (type === 'games' && activeValue < 5) this.props.onIncreaseSetting('games');
  }
  render() {
    const { players, games } = this.props;

    return (
      <div className="play-area__actions">
        <div className="change-values">
          <div className="change-values__title">Players</div>
          <div className="change-values__decrease"
               onClick={() => players > 1 ? this.props.onDecreaseSetting('players') : null}>
            -
          </div>
          <div className="change-values__value">{players}</div>
          <div className="change-values__increase"
               onClick={() => this.increaseValue(players, 'players')}>
            +
          </div>
        </div>

        <div className="change-values">
          <div className="change-values__title">Games</div>
          <div className="change-values__decrease"
               onClick={() => games > 1 ? this.props.onDecreaseSetting('games') : null}>
            -
          </div>
          <div className="change-values__value">{games}</div>
          <div className="change-values__increase"
               onClick={() => this.increaseValue(games, 'games')}>
            +
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  players: state.settings.get('players'),
  games: state.settings.get('games'),
});

const mapDispatchToProps = dispatch => ({
  onIncreaseSetting: type => dispatch(increaseSettingValue(type)),
  onDecreaseSetting: type => dispatch(decreaseSettingValue(type)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
