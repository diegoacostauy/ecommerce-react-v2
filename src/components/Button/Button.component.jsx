import React from 'react';
import './Button.styles.scss';

const Button = ({children, ...rest}) => (
  <button className="btn" {...rest}>
    {children}
  </button>
);

export default Button;