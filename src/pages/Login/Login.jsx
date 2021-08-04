import React from 'react';
import { connect } from 'react-redux';
import { fetchTokenAuth } from '../../redux/user-token/userTokenActions';
import { LoginContainer, Button, LoginLink } from './LoginStyles';
import BgVideo from '../../images/spider.mp4';
import { HorizontalOverlay } from '../../components/HorizontalOverlay/HorizontalOverlay';

const Login = ({ fetchTokenAuth }) => {
  return (
    <LoginContainer>
      <HorizontalOverlay
        overlay={
          'linear-gradient(to right, rgb(11, 9, 13, 0.9) 30%, transparent)'
        }
      ></HorizontalOverlay>
      <video autoPlay loop muted>
        <source src={BgVideo} type="video/mp4" />
      </video>
      <LoginLink>
        <h1>Login to your account</h1>
        <p>Please login to your account so we can save your favorite movies</p>
        <Button onClick={fetchTokenAuth} primary>
          Login
        </Button>
      </LoginLink>
    </LoginContainer>
  );
};

const mapDipatchToProps = (dispatch) => ({
  fetchTokenAuth: () => dispatch(fetchTokenAuth()),
});

export default connect(null, mapDipatchToProps)(Login);
