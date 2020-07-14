import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #F0F0F4;
  }

  body, input {
    font-family: 'Raleway', sans-serif;
  }

  img {
    max-width: 100%;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
