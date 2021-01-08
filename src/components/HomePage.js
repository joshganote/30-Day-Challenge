import React from 'react';
import { useHistory } from 'react-router-dom';
import backgroundImage from '../assets/new-background-big.jpg';
import { IoIosArrowUp } from 'react-icons/io'

import '../css/HomePage.css';
// Change font-soze unit to em
const HomePage = () => {
    const history = useHistory();
    const navigateToJared = () => {
        history.push("/JaredLogan");
    }
    const navigateToMatt = () => {
        history.push("/MatthewBoda");
    }
    const navigateToCallan = () => {
        history.push("/CallanSearcy");
    }
    const navigateToZane = () => {
        history.push("/ZaneCallister");
    }
    const navigateToKyl = () => {
        history.push("/KylMeans");
    }

    return (
        <div>
            <img src={backgroundImage} className="homepage-background" />
            <h1 className="header">JTL</h1>

            <div className="arrow arrow-one">
                <IoIosArrowUp />
            </div>

            <div className="description-box description-one description-text hide-text">
                <p>Jared Logan</p>
            </div>

            <div className="arrow arrow-two"><IoIosArrowUp /></div>
            <div className="arrow arrow-three"><IoIosArrowUp /></div>
            <div className="arrow arrow-four"><IoIosArrowUp /></div>
            {/* <div className="jared-container">
                <button onClick={navigateToJared} className="zone1"></button>
            </div>
            <div className="hide">
                <p>Jared</p>
            </div>
            <div className="matt-container">
                <button onClick={navigateToMatt} className="zone2"></button>
            </div>
            <div className="hide">
                <p>Matt</p>
            </div>
            <div className="callan-container">
                <button onClick={navigateToCallan} className="zone3"></button>
            </div>
            <div className="hide">
                <p>Callan</p>
            </div>
            <div className="zane-container">
                <button onClick={navigateToZane} className="zone4"></button>
            </div>
            <div className="hide">
                <p>Zane</p>
            </div>
            <div className="kyl-container">
                <button onClick={navigateToKyl} className="zone5"></button>
            </div>
            <div className="hide">
                <p>Kyl</p>
            </div> */}
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