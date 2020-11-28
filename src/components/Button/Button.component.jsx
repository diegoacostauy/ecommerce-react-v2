import React from 'react';
// import './Button.styles.scss';
import { ButtonStyled } from './Button.styles';

const Button = ({ children, ...props }) => (
  <ButtonStyled {...props}>
    {children}
  </ButtonStyled>
);

export default Button;