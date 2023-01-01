import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    magin:0;
    padding:0;
    box-sizing: border-box;
  } 

  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.baseProfile}
  }
  body{
    background-color: ${(props) => props.theme.baseBackground};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font:400 1rem Nunito, sans-serif;
  }

`;
