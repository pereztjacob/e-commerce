import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class Item extends Component {
  render() {

    const { index } = this.props;
    const { name, price, quantity } = this.props.user.cart[index];

    return (
      <Fragment>
        <tr>
          <th id='cart-item-name'>{name}</th>
          <th id='cart-item-price'>{price}</th>
          <th>{quantity}</th>
        </tr>
      </Fragment>
    );
  }
}
export default connect(
  state => ({
    user: state.user,
  }),
  null
)(Item);