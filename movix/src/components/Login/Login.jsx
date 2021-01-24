import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../../App.scss'


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
        const request_token = response.request_token

        sessionStorage.setItem('request_token', request_token);
        setRequestToken(request_token);
      })
      .catch((err) => {
        console.log(err);
      });
}, []);

const createSessionId = () => {
  // axios.post(`https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY}`, {
  //   request_token: `${requestToken}`
  // }).then((res) => {
  //   console.log(res)
  // })
  fetch(
    "https://api.themoviedb.org/3/authentication/session/new?api_key=4a5e130486cb63a2caff652d783f6a36",
    {
      method: "POST",
      body: JSON.stringify({ request_token: `${requestToken}` }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      // const hehe = res.session_id
      // localStorage.setItem("sessionId", hehe);

    });
  // }
}
useEffect(() => {
createSessionId()
},)


    return (
        <div className="login-container">

          <div className="link">
          <a href={redirectUrl}>
            xd
          </a>
          </div>
            
        </div>
    )
}

export default Login
