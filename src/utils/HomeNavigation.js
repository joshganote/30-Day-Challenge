import React from 'react';
import { useHistory } from 'react-router-dom';
import { HiOutlineArrowUp } from 'react-icons/hi';

const HomeNavigation = () => {
  const history = useHistory();
  const HandleReturnToHome = () => {
    history.push("/");
  }
  return (
    <div>
      <HiOutlineArrowUp
        onClick={HandleReturnToHome}
        color="#FFFFFF"
        size="4em"
        style={{
          position: 'absolute',
          right: 0,
          paddingRight: '10px',
          top: '25px',
          cursor: 'pointer',
          opacity: '0.75',
        }} />
    </div>
  )
}

export default HomeNavigation;