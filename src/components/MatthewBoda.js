import React from 'react';
import HomeNavigation from '../utils/HomeNavigation';
import MattBackground from '../assets/matt-big.jpg';

import '../css/MatthewBoda.css';

const MatthewBoda = () => {

  return (
    <div>
      <img src={MattBackground} className="homepage-background" />
      <h1 className="header header-extend">Matthew Boda</h1>
      <HomeNavigation />
    </div>
  )
}

export default MatthewBoda;