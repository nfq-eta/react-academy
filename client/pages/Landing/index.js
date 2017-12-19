import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import history from '../../core/history';

class Landing extends React.Component {
  render() {
    return (
      <div className="play-area__actions">
        <Button
          title="Start game"
          className="is-success"
          click={() => history.push('/session')}
        />
      </div>
    );
  }
}

export default Landing;
