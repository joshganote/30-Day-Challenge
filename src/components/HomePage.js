import React from 'react';
import { useHistory } from 'react-router-dom';

import '../css/HomePage.css';

const HomePage = () => {
    const history = useHistory();

    // Change to Jared URL
    const navigateToJared = () => {
        history.push("/JaredLogan");
      }
    const navigateToMatt = () => {
      history.push("/MatthewBoda");
    }
    const navigateToCallan = () => {
        history.push("/CallanSearcy");
      }

    return (
        <div className="bkg-image">
            <h1 className="home-header">JTL</h1>
            <div className="jared-container">
                <button onClick={navigateToJared} className="bkg-image_zone1"></button>
            </div>
            <div className="matt-container">
                <button onClick={navigateToMatt} className="bkg-image_zone2"></button>
            </div>
            <div className="callan-container">
                <button onClick={navigateToCallan} className="bkg-image_zone3"></button>
            </div>
        </div>
    )
}

export default HomePage;


// window.addEventListener('mousemove', function (e) {
//     document.getElementById('x-value').textContent = e.x;
//     document.getElementById('y-value').textContent = e.y;
// })
{/* <p>
                X: <span id="x-value"></span>
            </p>
            <p>
                Y: <span id="y-value"></span>
            </p> */}