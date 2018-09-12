import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeError } from '../actions';
import './error.css';

class Error extends Component {

  componentWillUnmount(){
    this.props.removeError();
  }

  render() {
    const { error } = this.props;

    return (
      <div className='error-box'>
        <pre> Error: {error
          ? error
          : error.error ? error.error : error
        }</pre>
      </div>
    );
  }
}

export default connect(
  ({ error }) => ({ error }),
  { removeError }
)(Error);