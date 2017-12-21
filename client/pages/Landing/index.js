import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import history from '../../core/history';

class Landing extends React.Component {
  componentWillMount() {

  }
  render() {
    return (
      <div className="play-area__actions">
        <div style={{marginBottom: '10px'}}>
          <Button
            title="Start game"
            className="is-success"
            click={() => history.push('/session')}
          />
        </div>

        <div>
          <Button
            title="Settings"
            className="is-success"
            click={() => history.push('/settings')}
          />
        </div>
      </div>
    );
  }
}

export default Landing;
