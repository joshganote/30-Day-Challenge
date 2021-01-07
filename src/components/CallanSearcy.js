import React from 'react';
import HomeNavigation from '../utils/HomeNavigation';
import CallanBackground from '../assets/callan-big.jpg';

import '../css/CallanSearcy.css';

const CallanSearcy = () => {

  return (
    <div>
      <img src={CallanBackground} className="homepage-background" />
      <h1 className="header header-extend">Callan Searcy</h1>
      <HomeNavigation />
    </div>
  )
}

export default CallanSearcy;