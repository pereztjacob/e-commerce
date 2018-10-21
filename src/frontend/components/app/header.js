import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../auth/actions';

import { Grid, Row, Col, Button } from 'react-bootstrap';

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
                <Col lg={6} md={6} sm={6} xs={6}>
                  <Link to="/"><h1>Shop</h1></Link>
                </Col>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <div>
                    <nav>
                      <section>
                        {
                          state.auth
                            ? <div>
                              <li><Button className="logout-button" onClick={this.handleLogOut}>Log out</Button></li>
                              <li><Link to={`users/${state.auth._id}/Cart`}>Cart</Link></li>
                            </div>
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
                      </section>
                    </nav>
                  </div>
                </Col>
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