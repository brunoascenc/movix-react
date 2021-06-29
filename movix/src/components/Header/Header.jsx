import React, { useState } from 'react';
import { connect } from 'react-redux';
import Filters from './Filters/Filters';
import SearchInput from './Search/SearchInput';
import { Link } from 'react-router-dom';
import '../../App.css';
import { fetchTokenAuth } from '../../redux/user/userActions';

const Header = ({ fetchTokenAuth }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const handleLogin = () => {
  //   axios
  //     .get(
  //       'https://api.themoviedb.org/3/authentication/token/new?api_key=4a5e130486cb63a2caff652d783f6a36'
  //     )
  //     .then((res) => {
  //       const token = res.data;
  //       window.location = `https://www.themoviedb.org/authenticate/${token.request_token}?redirect_to=http://localhost:3000/`;
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

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
          <form className={click ? 'nav-active' : null} data-scroll-header>
            <div className="filter-options">
              <span>Order By:</span>
              <Filters closeMenu={closeMobileMenu} />
            </div>
          </form>

          <div
            className={click ? 'close-nav' : 'burger nav'}
            onClick={handleClick}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
        <button onClick={fetchTokenAuth}>login</button>
      </header>
    </>
  );
};

const mapDipatchToProps = (dispatch) => ({
  fetchTokenAuth: () => dispatch(fetchTokenAuth()),
});

export default connect(null, mapDipatchToProps)(Header);
