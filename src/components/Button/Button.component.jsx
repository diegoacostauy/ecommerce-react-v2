import React from 'react';
import './Button.styles.scss';

const Button = ({ children, isGoogleSignIn, inverted, ...rest }) => (
  <button className={`btn ${inverted ? 'btn-inverted' : ''} ${isGoogleSignIn ? 'btn-google' : ''}`} {...rest}>
    {children}
  </button>
);

export default Button;