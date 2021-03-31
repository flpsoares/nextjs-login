import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
    font-family: 'Exo 2', sans-serif;
    color: white;
  }

  button {
    cursor: pointer;
    border: 0;
    background: 0;
  }

  input {
    border: 0;
    background: 0;
  }
`

export default GlobalStyle