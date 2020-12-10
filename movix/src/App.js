import React from "react";
import { DataProvider } from "./data/DataProvider";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
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
          </Switch>
          <Footer/> 
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
