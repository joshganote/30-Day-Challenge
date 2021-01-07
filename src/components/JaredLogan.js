import React from 'react';
import HomeNavigation from '../utils/HomeNavigation';
import JaredBackground from '../assets/jared-big.jpg';

import '../css/JaredLogan.css';

const JaredLogan = () => {

  return (
    <div>
      <img src={JaredBackground} className="homepage-background" />
      <h1 className="header header-extend">Jared Logan</h1>
      <HomeNavigation />
    </div>
  )
}

export default JaredLogan;