import React from "react";
import { DataProvider } from "./data/DataProvider";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import SearchResults from './components/SearchedMovies/SearchResults'
import FilterResults from './components/SearchedMovies/FilterResults'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/details/:id" component={Details} />
            <Route path="/search=:pathname?" component={SearchResults}/>
            <Route path="/filter=:pathname?&:pathname2?" component={FilterResults}/>
          </Switch>
          <Footer/> 
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
