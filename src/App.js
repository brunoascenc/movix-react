import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSessionId } from './redux/user-session/userSessionSelector';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import SearchResults from './pages/SearchPage/SearchResults';
import FilterResults from './pages/Filter/FilterResults';
import Login from './pages/Login/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ScrollToTop from './hooks/ScrollToTop';
import User from './pages/User/User';
import './App.scss';
import { AlertTemplate } from './components/AlertTemplate/AlertTemplate';
import GlobalStyle from './globalStyles';

//alert config
const options = {
  position: positions.TOP_CENTER,
  timeout: 3000,
  offset: '30px',
  transition: transitions.SCALE,
};

function App({ userId }) {
  const location = useLocation();

  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <GlobalStyle />
      <ScrollToTop>
        <div className="App">
          <Header />
          <Switch location={location}>
            <Route path="/" exact component={Home} />
            <Route path="/details/:id" component={Details} />
            <Route path="/search=:pathname?" component={SearchResults} />
            <Route path="/user" component={User} />
            <Route
              exact
              path="/login"
              render={() =>
                userId.sessionId ? <Redirect to="/user" /> : <Login />
              }
            />
            <Route
              path="/filter=:pathname?&:pathname2?"
              component={FilterResults}
            />
          </Switch>
          <Footer />
        </div>
      </ScrollToTop>
    </AlertProvider>
  );
}

const mapStateToProps = createStructuredSelector({
  userId: selectSessionId,
});

export default connect(mapStateToProps)(App);
