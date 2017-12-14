import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App));
