import React, { useState, useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Filters from './Filters/Filters';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineLogout } from 'react-icons/ai';
import SearchInput from './Search/SearchInput';
import { Link } from 'react-router-dom';
import '../../App.css';
import {
  fetchSessionId,
  signOutSuccess,
} from '../../redux/user-session/userSessionActions';
import { fetchUserDetails } from '../../redux/user-details/userDetailsAction';
import { selectToken } from '../../redux/user-token/userTokenSelector';
import { selectSessionId } from '../../redux/user-session/userSessionSelector';
import { selectUserDetails } from '../../redux/user-details/userDetailsSelector';
import { HeaderComponent, SearchContainer } from './HeaderStyles';

const Header = ({
  userToken,
  sessionId,
  userId,
  fetchUserDetails,
  signOutSuccess,
  userDetails,
}) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const username = userDetails.details.username;

  useEffect(() => {
    sessionId(userToken.token);
    fetchUserDetails(userId.sessionId);
  }, [fetchUserDetails, sessionId, userId.sessionId, userToken.token]);

  const handleSignOut = () => {
    closeMobileMenu();
    signOutSuccess();
  };

  return (
    <>
      <HeaderComponent>
        <SearchContainer>
          <Link to="/">
            <h1>Movix</h1>
          </Link>
          <SearchInput />
        </SearchContainer>
        <form className={click ? 'nav-active' : null} data-scroll-header>
          <div className="filter-options">
            <span>Order By:</span>
            <Filters closeMenu={closeMobileMenu} />
          </div>

          {userId.sessionId ? (
            <div className="user-links">
              <Link to="/user" onClick={closeMobileMenu}>
                <AiOutlineUser className="user-icon" /> {username}
              </Link>
              <Link className="logout" to="/" onClick={handleSignOut}>
                <AiOutlineLogout className="logout-icon" /> Logout
              </Link>
            </div>
          ) : (
            <Link className="login-link" to="/login" onClick={closeMobileMenu}>
              <AiOutlineUser className="user-icon" onClick={closeMobileMenu} />{' '}
              Login
            </Link>
          )}
        </form>
        {/* 
        <mobileMenu
          className={click ? 'close-nav' : 'burger nav'}
          onClick={handleClick}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </mobileMenu> */}
      </HeaderComponent>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  userToken: selectToken,
  userId: selectSessionId,
  userDetails: selectUserDetails,
});

const mapDipatchToProps = (dispatch) => ({
  sessionId: (token) => dispatch(fetchSessionId(token)),
  fetchUserDetails: (id) => dispatch(fetchUserDetails(id)),
  signOutSuccess: () => dispatch(signOutSuccess()),
});

export default connect(mapStateToProps, mapDipatchToProps)(Header);
