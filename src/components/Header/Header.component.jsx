import React from 'react';
import { connect } from 'react-redux';
// import './Header.styles.scss';
import { HeaderWrapper, LogoContainer, NavbarNav, NavItemLink } from './Header.styles';
import CartDropdown from '../CartDropdown/CartDropdown.component';
import CartIcon from '../CartIcon/CartIcon.component';
import { ReactComponent as Logo } from '../../../src/assets/crown.svg';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import { signOutStart } from '../../redux/user/user.actions';
// import Logo from '../../../src/assets/crown.svg';

const Header = ({currentUser, hidden, signOutStart}) => (
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
            signOutStart();
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

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);