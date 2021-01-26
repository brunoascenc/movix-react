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


// useEffect(() => {
//   axios
//     .get(
//       `https://api.themoviedb.org/3/account/{account_id}/favorite/movies?api_key=${API_KEY}&session_id=${localStorage.getItem(
//         "session_id"
//       )}&language=en-US&sort_by=created_at.asc&page=1`
//     )
//     .then((res) => {
//       console.log(res)
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }, []);

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
