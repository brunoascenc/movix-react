import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 /* @import url('https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto'); */
 /* @import 'node_modules/react-modal-video/scss/modal-video.scss'; */
 
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
    /* font-family: 'Noto Sans JP', sans-serif; */
    /* background: #121212; */
    background: rgb(7, 5, 8);
    color: #f2e9e9;
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif;
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
    letter-spacing: 1px;
    color: #e9f0eb;
    z-index: -1;
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
