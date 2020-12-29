import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import HomePage from './components/HomePage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/home">
        <HomePage />
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
