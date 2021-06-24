import React from 'react';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import SearchResults from './pages/SearchPage/SearchResults';
import FilterResults from './pages/Filter/FilterResults';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Switch, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ScrollToTop from './hooks/ScrollToTop';
import './App.scss';

function App() {
  const location = useLocation();

  return (
    <ScrollToTop>
      <div className="App">
        <Header />
        <Switch location={location}>
          <Route path="/" exact component={Home} />
          <Route path="/details/:id" component={Details} />
          <Route path="/search=:pathname?" component={SearchResults} />
          <Route
            path="/filter=:pathname?&:pathname2?"
            component={FilterResults}
          />
        </Switch>
        <Footer />
      </div>
    </ScrollToTop>
  );
}

export default App;
