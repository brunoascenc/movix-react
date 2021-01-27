import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../App.scss";

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

const Login = () => {
  const [requestToken, setRequestToken] = useState("");
  const redirectUrl = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://localhost:3000/`;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`
      )
      .then((res) => {
        const response = res.data;
        const request_token = response.request_token;

        sessionStorage.setItem("request_token", request_token);
        setRequestToken(request_token);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="login-container">
      <div className="login-wpp"></div>

      <form action="">
        {/* <img src={Logo} alt="logo" /> */}
        <h1>Movix</h1>
        <p>Entre e crie sua lista de filmes favoritos!</p>

        <div className="signin">
          <a href={redirectUrl} className="login1">
            Entrar
          </a>
        </div>

        {/* <div className="signup"> */}
          {/* <!-- <p>Entre e crie sua lista de filmes e séries favoritas!</p> --> */}
        {/* </div> */}
      </form>
    </section>
  );
};

export default Login;
