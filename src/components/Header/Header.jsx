import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filters from './Filters/Filters';
import SearchInput from './Search/SearchInput';
import { Link } from 'react-router-dom';
import '../../App.css';
import { fetchSessionId } from '../../redux/user-session/userSessionActions';
import { fetchUserDetails } from '../../redux/user-details/userDetailsAction';
import {
  HeaderComponent,
  SearchContainer,
  FilteOptions,
  Form,
  LoginLink,
  UserLinks,
  UserIcon,
} from './HeaderStyles';

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const user = useSelector((state) => state.user.details);
  const userId = useSelector((state) => state.sessionId);
  const userToken = useSelector((state) => state.auth);
  const username = user.username;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSessionId(userToken.token));
    if (userId.sessionId) {
      dispatch(fetchUserDetails(userId.sessionId));
    }
  }, [userId.sessionId, userToken.token, dispatch]);

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

export default Header;
