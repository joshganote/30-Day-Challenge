import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import HomePage from './components/HomePage';
import MatthewBoda from './components/MatthewBoda';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/MatthewBoda" exact component={MatthewBoda} />
    </BrowserRouter>
  );
}

export default App;
