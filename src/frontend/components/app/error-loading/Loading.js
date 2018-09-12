import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadingSelector } from './reducers';
import { PacmanLoader } from 'react-spinners';

class Loading extends Component {

  render() {
    const { loading } = this.props;
    if(!loading) return null;

    return (
      <div className="loading">
        <PacmanLoader
          size={60}
          color={'##3a875b'}
          loading={loading}
        />
      </div>
    );
  }
}

export default connect(
  state => ({ loading: loadingSelector(state) }),
  null
)(Loading);