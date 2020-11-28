import styled, { css } from 'styled-components';

const getButtonsStyles = props => {
  if (props.isGoogleSignIn) {
    return google;
  }
  return props.inverted ? inverted : btn;
};

const btn = css`
  background-color: black;
  color: white;
  border: none;

  &:hover,
  &:focus {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

const inverted = css`
  background-color: #fff;
  color: #000;
  border: 1px solid #000;

  &:hover,
  &:focus {
    background-color: black;
    color: white;
    border: none;
  }
`;

const google = css`
  background-color: #4285f4;
  color: #fff;
  border: none;

  &:hover,
  &:focus {
    background-color: #357ae8;;
    border: none;
  }
`

export const ButtonStyled = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  ${getButtonsStyles}
`;
