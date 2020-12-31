import React from 'react';
import { useHistory } from 'react-router-dom';
import { HiOutlineArrowUp } from 'react-icons/hi';

import '../css/MatthewBoda.css';

const MatthewBoda = () => {
  const history = useHistory();
  const HandleReturnToHome = () => {
    history.push("/");
  }
  return (
    <div className="page-background">
      <div className="header-container">
        <h1 className="header">Matthew Boda</h1>
        <HiOutlineArrowUp
        onClick={HandleReturnToHome}
        color="#FFFFFF"
        size="4em"
        className="back-arrow"/>
      </div>
    </div>
  )
}

export default MatthewBoda;