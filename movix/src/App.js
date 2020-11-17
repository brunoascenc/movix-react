import React from 'react';
import { DataProvider } from "./data/DataProvider";
import Home from './components/Home'
import './App.css';

function App() {
  return (
    <DataProvider>
    <div className="App">
     <Home/>
    </div>
    </DataProvider>
  );
}

export default App;
