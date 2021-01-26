import React from "react";
import { DataProvider } from "./data/DataProvider";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import SearchResults from './components/SearchedMovies/SearchResults'
import FilterResults from './components/SearchedMovies/FilterResults'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import User from './components/User/User'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <DataProvider>
      <Router>
      <Header />
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/details/:id" component={Details} />
            <Route path="/search=:pathname?" component={SearchResults}/>
            <Route path="/filter=:pathname?&:pathname2?" component={FilterResults}/>
            <Route path="/login" component={Login}/>
            <Route path="/user" component={User}/>
          </Switch>
          <Footer/> 
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
