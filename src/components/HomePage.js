import React from 'react';
import { useHistory } from 'react-router-dom';

import '../css/HomePage.css';

const HomePage = () => {
    const history = useHistory();
    const handleNavigate = () => {
      history.push("/MatthewBoda");
    }

    return (
        <div className="bkg-image">
            <h1 className="header">JTL</h1>
            <div className="btn-one-container">
                <button onClick={handleNavigate} className="bkg-image_zone1"></button>
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