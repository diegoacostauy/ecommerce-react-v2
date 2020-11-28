import React from 'react';
import { connect } from 'react-redux';
// import './Header.styles.scss';
import { HeaderWrapper, LogoContainer, NavbarNav, NavItemLink } from './Header.styles';
import CartDropdown from '../CartDropdown/CartDropdown.component';
import CartIcon from '../CartIcon/CartIcon.component';
import { ReactComponent as Logo } from '../../../src/assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
// import Logo from '../../../src/assets/crown.svg';

const Header = ({currentUser, hidden}) => (
  <HeaderWrapper>
    <LogoContainer to="/">
      <Logo className="logo" />
      {/* <img src={Logo} alt=""/> */}
    </LogoContainer>
    <NavbarNav>
      <NavItemLink to="/shop" className="nav-item">Shop</NavItemLink>
      {
        currentUser ?
          (<NavItemLink as="div" tabIndex="0" role="link" className="nav-item" onClick={(e) => {
            e.preventDefault();
            auth.signOut();
            window.location.pathname = '/';
          }}>Sign Out</NavItemLink>) :
          ( <NavItemLink className="nav-item" to="/register">Sign In</NavItemLink> )

      }
      <NavItemLink to="/contact" className="nav-item">Contact</NavItemLink>
      <CartIcon />
    </NavbarNav>
    {(
      !hidden ?
      <CartDropdown /> :
      null
    )}

  </HeaderWrapper>
);

// const mapStateToProps = state => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state)
// });

// createStructuredSelector
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps, null)(Header);