import React, { Component, Fragment } from 'react';
import { Button, Modal, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { signOut } from '../auth/actions';
import { Link } from 'react-router-dom';
import burger from '../../../styles/assets/list-menu.png';


class ModalExample extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);


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

  handleLogOut = event => {
    event.preventDefault();
    this.props.signOut();
  };

  render() {

    const { state } = this.props;

    return (
      <div>
        <button onClick={this.handleShow} id='burger-button'>
          <Image src={burger} id='burger' responsive/>
        </button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Menu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            { state.auth ?
              <Fragment>
                <li><button className="logout-button" onClick={this.handleLogOut}>Log out</button></li>
                <li><Link to={`users/${state.auth._id}/Cart`}>Cart</Link></li>
              </Fragment>
                :
              <Fragment>
                <li><Link to={{ 
                  pathname: '/auth/signin', 
                }}>Sign In</Link></li>
                <li><Link to={{ 
                  pathname: '/auth/signup', 
                }}>Sign Up</Link></li>
              </Fragment>
            }
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default connect(
  state => ({
    state: state,
  }),
  { signOut }
)(ModalExample);