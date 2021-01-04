import React from 'react';
import { useHistory } from 'react-router-dom';
import { HiOutlineArrowUp } from 'react-icons/hi';

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
      <div>
        <HiOutlineArrowUp
          onClick={handleReturnToHome}
          color="#FFFFFF"
          size="4em"
          style={{
            position: 'absolute',
            right: 0,
            paddingRight: '10px',
            top: '25px',
            cursor: 'pointer',
            opacity: '0.75',
          }}
        />
      </div>
      <div id="leave">
        <h1 className="page-header">JTL</h1>
      </div>
    </div>
  )
}

export default HomeNavigation;