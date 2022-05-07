import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #fff;
    color: #000;
    font-family: 'Roboto', 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased !important;

    max-width: 1200px;
    width: 100%;

    display: flex;
    justify-content: center;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body, input, button {
    font-family: 'Roboto', 'Open Sans', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: inside;
  }

  button {
    cursor: pointer;
  }
`
