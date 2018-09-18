import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signUp } from './actions';
import Error from '../app/error-loading/Error';

class Signup extends PureComponent {

  handleSubmit = event => {
    event.preventDefault();
    const { target: { elements } } = event;
    const { name, email, password } = elements;

    const { signUp, history } = this.props;

    signUp({
      name: name.value,
      email: email.value,
      password: password.value,
      cart: []
    })
      .then(() => {
        history.push('/'); // Return user to home page after signing up
      });
  };

  render() {

    const { error } = this.props;

    return (

      <section className='form-submit'>

        {
          error ?
            <Error/>
            : null
        }

        <h4>Sign up</h4>
        <form onSubmit={this.handleSubmit}>

          <div>
            <label>
              <div>Name:</div>
              <input name="name" required/>
            </label>
          </div>

          <div>
            <label>
              <div>Email:</div>
              <input name="email" required/>
            </label>
          </div>
          
          <div>
            <label>
              <div>Password:</div>
              <input name="password" required/>
            </label>
          </div>

          <div className='sign-up'>
            <label>
              <div>
                <button>Sign up</button>
              </div>
            </label>
          </div>

        </form>
      </section>
    );
  }
}

export default withRouter(connect(
  ({ auth, error }) => ({ auth, error }),
  { signUp }
)(Signup));