import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Signup from '../auth/Signup';
import Signin from '../auth/Signin';
import Header from './Header';
import Footer from './Footer';
import UserCart from '../cart/UserCart';
import Shop from '../shop/Shop';
import { setUserToState, loadUser } from './actions';

class App extends Component {

  UNSAFE_componentWillMount() {
    let auth = null;
    if(localStorage.getItem('name')) {
      auth = {};
      auth.name = localStorage.getItem('name');
      auth._id = localStorage.getItem('_id');
    }
    this.props.setUserToState(auth);
  }
  
  render() {    

    return (
      <Router>
        <div id="container">
          <Header/>
          <main id="main" role="main">
            <Switch>
              <Route exact path="/auth/signup" component={Signup}/>
              <Route exact path="/auth/signin" component={Signin}/>
              <Route exact path="/users/:id/Cart" component={UserCart}/>
              <Route exact path="/" component={Shop}/>
            </Switch>
          </main>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({ 
    loading: state.loading,
    error: state.error,
    state: state
  }),
  { setUserToState, loadUser }
)(App);