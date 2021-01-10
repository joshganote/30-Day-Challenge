import React from 'react';
import { useHistory } from 'react-router-dom';
import { IoIosArrowUp } from 'react-icons/io';

import '../css/HomeNavigation.css';

const HomeNavigation = () => {
  const history = useHistory();
  const timeoutTrigger = () => {
    setTimeout(transition, 1000);
  }

  const transition = () => {
    history.push("/");
  }
  const handleReturnToHome = () => {
    document.getElementById("leave").classList.add("leave-page");
    timeoutTrigger();
  }

  return (
    <div>
      <div className="nav-arrow">
        <IoIosArrowUp
          onClick={handleReturnToHome}
          style={{cursor: 'pointer'}}
        />
      </div>
      <div id="leave">
        <h1 className="header hide-text">JTL</h1>
      </div>
    </div>
  )
}

export default HomeNavigation;