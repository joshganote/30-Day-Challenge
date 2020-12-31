import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import HomePage from './components/HomePage';
import JaredLogan from './components/JaredLogan';
import MatthewBoda from './components/MatthewBoda';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/JaredLogan" exact component={JaredLogan} />
      <Route path="/MatthewBoda" exact component={MatthewBoda} />
    </BrowserRouter>
  );
}

export default App;
