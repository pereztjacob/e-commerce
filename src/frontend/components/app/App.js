import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Signup from '../forms/Signup';
import Signin from '../forms/Signin';
import Header from './header/Header';
import Footer from './footer/Footer';
import UserDetail from '../user/UserDetail';
import EditUser from '../user/EditUser';
import UserCart from '../user/UserCart';
import Shop from '../shop/Shop';
import { setUserToState, loadUser } from './actions';

class App extends Component {

  componentWillMount() {
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
              <Route exact path="/users/:id" component={UserDetail}/>
              <Route exact path="/edituser" component={EditUser}/>
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