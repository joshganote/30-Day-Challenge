import React from 'react';

import '../css/HomePage.css';

function HomePage() {

    const handleClickOne = () => {
        console.log("Image 1")
    }
    const handleClickTwo = () => {
        console.log("Image 2")
    }

    return (
        <div className="bkg-image">
            <h1 className="header">JTL</h1>
            <div className="btn-one-container">
            <button onClick={handleClickOne} className="bkg-image_zone1"></button>
            </div>
        </div>
    )
}

export default HomePage


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