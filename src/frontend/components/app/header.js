import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../auth/actions';
import ModalExample from './modal';

import { Grid, Row, Col, Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends Component {

  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }
    
    handleLogOut = event => {
      event.preventDefault();
      this.props.signOut();
    };

    render() { 

      const { state } = this.props;

      return (
        <header>
          <section>

            <Grid fluid>
              <Row>
                <Navbar>
                  <Col lg={4} md={4} sm={4} xs={4} xsOffset={4} id="logo">
                    <Navbar.Header id="nav-header">
                      <Link to="/"><h1 id='title'>SHOP</h1></Link>
                    </Navbar.Header>
                  </Col>
                  <Col lg={4} md={4} sm={4} xs={4} id="modal">
                    <Nav pullRight>
                      <NavItem>
                        <ModalExample id='nav-modal'/>
                      </NavItem>
                    </Nav>
                  </Col>
                </Navbar>
              </Row>
            </Grid>

          </section> 
        </header>
      );
    }
}

export default connect(
  state => ({
    state: state,
  }),
  { signOut }
)(Header);