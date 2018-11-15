import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addToCartAction } from './actions';
import { loadUser } from '../app/actions';
import ItemModal from './itemModal';

class ShopItem extends Component {

  render() {

    function displayLoginPrompt(){
      alert('Must login first!');
    }
    
    function importAll(r) {
      let images = {};
      r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
      return images;
    }

    const images = importAll(require.context('../../../styles/assets', false, /\.(png|jpe?g|svg)$/));

    const { name, price, description, imageName } = this.props.data;
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
        <div id="card">

          <div id='layer'>
            <img src={images[imageName]} id='itemImage'/>
          </div>

          <ItemModal name={name} price={price} description={description} id={id}/>

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