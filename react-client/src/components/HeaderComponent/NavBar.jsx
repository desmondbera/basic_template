import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          <li className="navButton"><Link to="">Home</Link></li>
          <li class="navButton"><Link to="">Projects</Link></li>
          <li class="navButton"><Link to="">About</Link></li>
          <li class="navButton"><Link to="">Contact</Link></li>
        </ul>
      </header>
    )
  }
}

export default NavBar;
