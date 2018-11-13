import React, { Component, Fragment } from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { signOut } from '../auth/actions';
import { addToCartAction } from './actions';
import { loadUser } from '../app/actions';

class ItemModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {

    function displayLoginPrompt(){
      alert('Must login first!');
    }

    const { name, price, description, /*imageURL,*/ } = this.props;
    const { id } = this.props;

    let button;

    if(id) {
      button = <button onClick={() => {

        const quantity = document.getElementById('quantity-counter' + name).value;
        const cart = { name: name, price: price, quantity: quantity };

        addToCartAction(cart, id);

        this.props.loadUser(this.props.id._id);
      
      }}>Add to Cart</button>;

    } else {
      button = <button onClick={() => displayLoginPrompt()}>Add to Cart</button>;
    }

    return (
      <div id='modal-button-container'>
        <div>
          <button onClick={this.handleShow} id='modal-button'>
          ^ Shop this look ^
          </button>

          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Fragment>
                <p>{price}</p>
                <p>{description}</p>

                <label>
                  <p>Quantity:</p>
                  <input name="quantity" defaultValue="1" id={'quantity-counter' + name}/>
                </label>

                {button}
              </Fragment>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    state: state,
  }),
  { signOut, loadUser }
)(ItemModal);