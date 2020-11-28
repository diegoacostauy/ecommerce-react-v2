import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

// const navItem = css`
//   padding: 10px 15px;
//   text-transform: uppercase;

//   &:hover,
//   &:focus {
//     cursor: pointer;
//   }
// `;

export const HeaderWrapper = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const NavbarNav = styled.nav`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavItemLink = styled(Link)`
  padding: 10px 15px;
  text-transform: uppercase;

  &:hover,
  &:focus {
    cursor: pointer;
  }
`;