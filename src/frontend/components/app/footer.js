import React, { Component } from 'react';
import '../app.css';

export default class Footer extends Component {

  render() { 
    return (
      <footer role="contentinfo" id="footer">
        <section className="footer maxwidth-wrap"> 
          <p>(c) <a href="https://github.com/top-hat-1" target="_blank" rel="author noopener noreferrer">Shop</a></p>
          <p>Created by: <a href="https://github.com/pereztjacob" target="_blank" rel="author noopener noreferrer">Jacob Perez</a></p>
        </section>
      </footer>
    );
  }
}