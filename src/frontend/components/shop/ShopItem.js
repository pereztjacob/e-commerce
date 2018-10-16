import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addToCartAction } from './actions';
import { loadUser } from '../app/actions';

class ShopItem extends Component {

  render() {

    function displayLoginPrompt(){
      alert('Must login first!');
    }

    const { name, price, description, /*imageURL,*/ } = this.props.data;
    const { id } = this.props;

    let button;

    if(id) {
      button = <button onClick={() => {

        const quantity = document.getElementById('quantity-counter' + name).value;
        const cart = { name: name, price: price, quantity: quantity };

        addToCartAction(cart, id);

        this.props.loadUser(this.props.auth._id);
      
      }}>Add to Cart</button>;

    } else {
      button = <button onClick={() => displayLoginPrompt()}>Add to Cart</button>;
    }

    return (
      <Fragment>
        <div>

          <p>{name}</p>
          <p>{price}</p>
          <p>{description}</p>

          <label>
            <p>Quantity:</p>
            <input name="quantity" defaultValue="1" id={'quantity-counter' + name}/>
          </label>

          {button}

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
)(ShopItem);