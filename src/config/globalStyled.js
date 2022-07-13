import {createGlobalStyle} from "styled-components";

const GlobalStyled = createGlobalStyle`
    *{
      padding:0;
      margin:0;
      outline:none;
      font-family: 'Roboto', sans-serif;
    }
    body,
    #root{
      height: 100vh;
      background: rgb(193,222,174);
      background: linear-gradient(90deg, rgba(193,222,174,1) 0%, rgba(199,234,199,1) 50%, rgba(242,245,200,1) 100%);
      flex: 1;
    }
    
    
    `;

export default GlobalStyled;