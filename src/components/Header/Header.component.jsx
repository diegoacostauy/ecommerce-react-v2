import React from 'react';
import { Link } from 'react-router-dom';
import './Header.styles.scss';
import { ReactComponent as Logo } from '../../../src/assets/crown.svg';

const Header = () => (
  <header className="navbar">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <nav className="navbar-nav">
      <Link to="/shop" className="nav-item">Shop</Link>
      <Link to="/contact" className="nav-item">Contact</Link>
    </nav>

  </header>
);

export default Header;