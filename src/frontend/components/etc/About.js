import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import nginx from '../../../styles/assets/nginx.png';
import sass from '../../../styles/assets/sass.png';
import rbootstrap from '../../../styles/assets/r-bootstrap.png';
import redux from '../../../styles/assets/redux.png';
import stripe from '../../../styles/assets/stripe.jpg';
import certbot from '../../../styles/assets/certbot.png';

class About extends PureComponent {

  render() {

    const { error } = this.props;

    return (
      <section className='about-page'>
        <div>
          <h1>About</h1>
          <h3>This website is a functional boilerplate for E-Commerce projects. It's core consists of Mongo, Express, React, and Node, and it is deployed via AWS EC2.</h3>
          <h3>Featured tools, libraries, and APIs include:</h3>
          <ul>
            <li><div><img src={nginx}/><p>NginX</p></div></li>
            <li><div><img src={sass}/><p>Sass</p></div></li>
            <li><img src={rbootstrap}/>React-Bootstrap</li>
            <li><img src={redux}/>Redux</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default withRouter(connect(
  ({ error }) => ({ error }),
  { }
)(About));