import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import HomePage from './components/HomePage';
import JaredLogan from './components/JaredLogan';
import MatthewBoda from './components/MatthewBoda';
import CallanSearcy from './components/CallanSearcy';
import ZaneCallister from './components/ZaneCallister';
import KylMeans from './components/KylMeans';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/JaredLogan" exact component={JaredLogan} />
      <Route path="/MatthewBoda" exact component={MatthewBoda} />
      <Route path="/CallanSearcy" exact component={CallanSearcy} />
      <Route path="/ZaneCallister" exact component={ZaneCallister} />
      <Route path="/KylMeans" exact component={KylMeans} />
    </BrowserRouter>
  );
}

export default App;
