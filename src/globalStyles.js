import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
    background: rgb(7, 5, 8);
    height:100vh; margin:0; 
    color: #f2e9e9;
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }


  .container{
    padding-left: 3%;
    padding-right: 3%;
  }

  ul{
    list-style: none;
  }

  .section-title{
    margin-bottom: 15px;
  }

  .alert-box {
    background: #8d28e0;
    padding: 12px;
    color: rgb(233, 221, 221);
    border-radius: 25px 0 0 25px;
    margin-top: -250px;
  }


  p{
    font-family: 'Roboto', sans-serif;
  }

  .movie-poster{
    width: 175px;
    height: 260px;
    border-radius: 12px;
    border: solid 1px rgb(44, 44, 51, 0.3);
    image-rendering: -webkit-optimize-contrast;
    transition: 0.3s ease;
  }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: #efe6e3 !important;
   }
`;

export default GlobalStyle;
