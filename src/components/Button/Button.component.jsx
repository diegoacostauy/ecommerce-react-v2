import React from 'react';
import './Button.styles.scss';

const Button = ({ children, isGoogleSignIn, ...rest }) => (
  <button className={`btn ${isGoogleSignIn ? 'btn-google' : ''}`} {...rest}>
    {children}
  </button>
);

export default Button;