import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Footer extends Component {
  render() {
    return (
      <footer>
        <ul id="footerButtons">
          <li className="footerButton"><Link to=""><i class="fab fa-github"></i></Link></li>
          <li className="footerButton"><Link to=""><i class="fab fa-medium"></i></Link></li>
          <li className="footerButton"><Link to=""><i class="fab fa-linkedin"></i></Link></li>
          <li className="footerButton"><Link to=""><i class="far fa-envelope"></i></Link></li>
        </ul>
      </footer>
    )
  }
}

export default Footer;
