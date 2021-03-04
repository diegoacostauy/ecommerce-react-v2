import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans Condensed';
    padding: 20px 60px;

    @media (max-width: 800px) {
      padding: 10px;
    }
  }

  a {
    color: #000;
    text-decoration: none;
  }
`;