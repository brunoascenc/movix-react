import React from "react";
import { DataProvider } from "./data/DataProvider";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import SearchResults from "./components/SearchedMovies/SearchResults";
import FilterResults from "./components/SearchedMovies/FilterResults";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Switch, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.scss";

function App() {
  const location = useLocation();

  return (
    <DataProvider>
          <ScrollToTop>
            <div className="App">
            <Header />
            <TransitionGroup>
    <CSSTransition timeout={300} classNames="fade" key={location.key}>
              <Switch location={location}>
                <Route path="/" exact component={Home} />
                <Route path="/details/:id" component={Details} />
                <Route path="/search=:pathname?" component={SearchResults} />
                <Route
                  path="/filter=:pathname?&:pathname2?"
                  component={FilterResults}
                />
              </Switch>
              </CSSTransition>
      </TransitionGroup>
              <Footer />
            </div>

          </ScrollToTop>
    </DataProvider>


  );
}

export default App;
