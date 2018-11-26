import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
            <li>NginX</li>
            <li>Sass</li>
            <li>React-Bootstrap</li>
            <li>Redux</li>
            <li>Stripe</li>
            <li>CertBot</li>
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