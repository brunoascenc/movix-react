import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchTokenAuth } from '../../redux/user-token/userTokenActions';
import { LoginContainer, Button, LoginLink } from './LoginStyles';
import BgVideo from '../../images/spider.mp4';
import { HorizontalOverlay } from '../../components/HorizontalOverlay/HorizontalOverlay';

const Login = () => {
  const dispatch = useDispatch();

  return (
    <LoginContainer>
      <HorizontalOverlay
        className="horizontal-overlay"
        overlay={
          'linear-gradient(to right, rgb(11, 9, 13, 0.8) 15%, transparent)'
        }
      ></HorizontalOverlay>
      <video autoPlay loop muted>
        <source className="video-src" src={BgVideo} type="video/mp4" />
      </video>
      <div className="login-link">
        <LoginLink>
          <h1>Login to your account</h1>
          <p>
            Please login to your account so we can save your favorite movies
          </p>
          <Button onClick={() => dispatch(fetchTokenAuth())} primary>
            Login
          </Button>
        </LoginLink>
      </div>
    </LoginContainer>
  );
};

export default Login;
