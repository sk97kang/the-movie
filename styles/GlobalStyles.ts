import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  ${reset}
  *{
    box-sizing: border-box;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:14px;
    font-weight: 400;
    color: rgba(20,20,20,1);
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  
`;

export default GlobalStyle;
