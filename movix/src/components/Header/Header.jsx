import React from "react";
import Filters from "./Filters";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import "../../App.css";
// import axios from "axios";

// const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export default function Header() {
  // const [requestToken, setRequestToken] = useState("");
  //   const redirectUrl = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://localhost:3000/`;

  // const getRequestToken = () => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`
  //     )
  //     .then((res) => {
  //       const response = res.data;
  //       setRequestToken(response.request_token);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // console.log(requestToken)

  // useEffect(() => {
  //   getRequestToken()
  // }, [getRequestToken]);

  return (
    <>
      <header>
        <div className="header-elements">
          <div className="search-container">
            <Link to="/">
              <h1>Movix</h1>
            </Link>
            <SearchInput />
          </div>
          <form data-scroll-header>
            <div className="close-nav">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
            <div className="filter-options">
              <span>Order By:</span>
              <Filters />
            </div>
          </form>

          <div className="burger nav">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>

        <Link to='/login'>login</Link>
      </header>
    </>
  );
}
