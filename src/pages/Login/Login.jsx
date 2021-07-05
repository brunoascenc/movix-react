import React from 'react';
import { connect } from 'react-redux';
import { fetchTokenAuth } from '../../redux/user-token/userTokenActions';

const Login = ({ fetchTokenAuth }) => {
  return (
    <div className="login-page">
      <div className="content">
        <h1>Movix</h1>
        <p>Login to save your favorite movies</p>
        <button onClick={fetchTokenAuth}>Login</button>
      </div>
    </div>
  );
};

const mapDipatchToProps = (dispatch) => ({
  fetchTokenAuth: () => dispatch(fetchTokenAuth()),
});

export default connect(null, mapDipatchToProps)(Login);
