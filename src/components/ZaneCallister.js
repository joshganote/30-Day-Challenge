import React from 'react';
import HomeNavigation from '../utils/HomeNavigation';
import ZaneBackground from '../assets/zane-big.jpg';

import '../css/ZaneCallister.css';

const ZaneCallister = () => {

  return (
    <div>
      <img src={ZaneBackground} className="homepage-background" />
      <h1 className="header header-extend">Zane Callister</h1>
      <HomeNavigation />
    </div>
  )
}

export default ZaneCallister;