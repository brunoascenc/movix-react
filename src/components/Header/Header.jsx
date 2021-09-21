import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filters from './Filters';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';
import { VscMenu, VscClose } from 'react-icons/vsc';
import { fetchSessionId } from '../../redux/user-session/userSessionActions';
import {
  fetchUserDetails,
  fetchUserRequest,
} from '../../redux/user-details/userDetailsAction';
import {
  HeaderComponent,
  SearchContainer,
  FilteOptions,
  Form,
  LoginLink,
  UserLinks,
  UserIcon,
  MobileMenu,
  CloseMenu,
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
    dispatch(fetchUserRequest(userToken.token));
    if (userId.sessionId) {
      // dispatch(fetchUserDetails(userId.sessionId));
      setTimeout(() => {
        dispatch(fetchUserDetails(userId.sessionId));
      }, 600);
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
        <Form data-scroll-header active={click ? true : false}>
          <CloseMenu onClick={handleClick}>
            <VscClose className="close" />
          </CloseMenu>
          <div className="search">
            <span>Search:</span>
            <SearchInput closeMenu={closeMobileMenu} />
          </div>
          <FilteOptions>
            <span>Filter by:</span>
            <Filters closeMenu={closeMobileMenu} />
          </FilteOptions>

          {userId.sessionId ? (
            <UserLinks>
              <Link
                className="profile-link"
                to="/user"
                onClick={closeMobileMenu}
              >
                <UserIcon>
                  <span>{username && username.charAt(0)}</span>
                </UserIcon>
                <p>Meu perfil</p>
              </Link>
            </UserLinks>
          ) : (
            <LoginLink to="/login" onClick={closeMobileMenu}>
              Login
            </LoginLink>
          )}
        </Form>

        <MobileMenu onClick={handleClick}>
          <VscMenu className="burger" />
        </MobileMenu>
      </HeaderComponent>
    </>
  );
};

export default Header;
