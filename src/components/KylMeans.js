import React from 'react';
import HomeNavigation from '../utils/HomeNavigation';
import KylBackground from '../assets/kyl-big.jpg';

import '../css/KylMeans.css';

const KylMeans = () => {

  return (
    <div>
      <img src={KylBackground} className="homepage-background" />
      <h1 className="header header-extend">Kyl Means</h1>
      <HomeNavigation />
    </div>
  )
}

export default KylMeans;