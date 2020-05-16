import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { HomeIcon, 
         AddressCardIcon, 
         CodeIcon, 
         CompassIcon, 
         PaperPlaneIcon
       } from '@patternfly/react-icons';
import logo from '../img/logo2x.png';
import '../styles/Navbar.scss';

class Navbar extends Component {

  render() {
    return (
      <header className="navMenu">
        <nav>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="home-navigation-link" />
            </Link>
          </div>
          <ul className="links right">
            <li className="red">
              <NavLink exact to="/">
                <span><HomeIcon size="lg"/></span>Home
              </NavLink>
            </li>
            <li className="orange">
              <NavLink to="/about">
                <span><AddressCardIcon size="lg"/></span>About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects">
                <span><CodeIcon size="lg"/></span>Projects
              </NavLink>
            </li>
            <li className="blue">
              <NavLink to="/now">
                <span><CompassIcon size="lg"/></span>Now
              </NavLink>
            </li>
            <li className="purple">
              <NavLink to="/contact">
                <span><PaperPlaneIcon size="lg"/></span>Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }

}

export default withRouter(Navbar);