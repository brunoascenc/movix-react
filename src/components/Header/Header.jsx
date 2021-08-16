import React, { useState, useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Filters from './Filters/Filters';
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
import {
  HeaderComponent,
  SearchContainer,
  FilteOptions,
  Form,
  LoginLink,
  UserLinks,
  UserIcon,
  LogoutLink,
} from './HeaderStyles';

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
      <HeaderComponent className="container">
        <SearchContainer>
          <Link to="/">
            <h1>Movix</h1>
          </Link>
          <SearchInput />
        </SearchContainer>
        <Form className={click ? 'nav-active' : null} data-scroll-header>
          <FilteOptions>
            <span>Filter by:</span>
            <Filters closeMenu={closeMobileMenu} />
          </FilteOptions>

          {userId.sessionId ? (
            <UserLinks>
              <Link to="/user" onClick={closeMobileMenu}>
                <UserIcon>
                  <span>{username && username.charAt(0)}</span>
                </UserIcon>
              </Link>
              {/* <Link className="logout" to="/" onClick={handleSignOut}>
                <LogoutLink>Logout</LogoutLink>
              </Link> */}
            </UserLinks>
          ) : (
            <LoginLink to="/login" onClick={closeMobileMenu}>
              Login
            </LoginLink>
          )}
        </Form>
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
