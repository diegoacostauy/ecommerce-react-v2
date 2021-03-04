import styled from 'styled-components';
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

  @media (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;

  @media (max-width: 800px) {
    width: 50px;
  }
`;

export const NavbarNav = styled.nav`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const NavItemLink = styled(Link)`
  padding: 10px 15px;
  text-transform: uppercase;

  &:hover,
  &:focus {
    cursor: pointer;
  }
`;