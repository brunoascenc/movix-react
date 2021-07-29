import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto');
 
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
  }

 *:focus {
   outline: none;
  }

 a{
   text-decoration: none;
  }

  body{
    font-family: 'Noto Sans JP', sans-serif;
    background: #121212;
    background: rgb(10, 10, 14);
    color: #f2e9e9;
    overflow-x: hidden;
  }

  .container{
    padding-left: 3%;
    padding-right: 3%;
  }
`;

export default GlobalStyle;
