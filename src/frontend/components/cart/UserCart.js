import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../app/actions';
import UserCartItem from './UserCartItem';
import Checkout from './Checkout';

class UserCart extends Component {

  UNSAFE_componentWillMount(){
    this.props.loadUser(this.props.auth._id);
  }

  render() {

    if(!this.props.user) return null;

    const { cart } = this.props.user;

    const costs = cart.map(x => parseInt(x.price.replace('$', '')));
    
    function sum(total, num, i){
      return total * parseInt(cart[i - 1].quantity) + num * parseInt(cart[i].quantity);
    }

    function calculateTotal(){
      if(cart.length === 1){
        const total = costs[0] * parseInt(cart[0].quantity);
        return total;
      } else if(cart.length === 0){
        const total = 0;
        return total;
      } else {
        const total = costs.reduce(sum);
        return total;
      }
    }

    return (
      <Fragment>
        <div>
          <table>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Price</th> 
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => <UserCartItem key={index} index={index}/>)}
              <tr>
                <th>Total: ${calculateTotal()}</th>
              </tr>
            </tbody>
          </table>

          <Checkout/>

        </div>
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
    auth: state.auth
  }),
  { loadUser }
)(UserCart);