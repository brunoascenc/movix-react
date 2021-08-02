import React from 'react';
import { connect } from 'react-redux';
import { fetchTokenAuth } from '../../redux/user-token/userTokenActions';
import { LoginContainer } from './LoginStyles';

const Login = ({ fetchTokenAuth }) => {
  return (
    <LoginContainer>
      <h1>Movix</h1>
      <p>Login to save your favorite movies</p>
      <button onClick={fetchTokenAuth}>Login</button>
    </LoginContainer>
  );
};

const mapDipatchToProps = (dispatch) => ({
  fetchTokenAuth: () => dispatch(fetchTokenAuth()),
});

export default connect(null, mapDipatchToProps)(Login);
