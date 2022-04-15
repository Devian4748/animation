import { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';

const DefinedGlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-weight: 300;
    font-family: 'sans-serif';
    color : #333;
    background: linear-gradient( #e67e22, #d35400);
    background-repeat: no-repeat;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const GlobalStyle = () => {
  return (
    <Fragment>
      <Reset />
      <DefinedGlobalStyle />
    </Fragment>
  );
};

export default GlobalStyle;
