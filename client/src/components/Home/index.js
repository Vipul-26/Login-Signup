import React from 'react';
import './home.css';

const Home = () => {

    const getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const changeColor = () => {
        let spanText = document.getElementById('mern');
        spanText.style.color = getRandomColor();
    };

    setInterval(changeColor, 1000);

    return (
        <>
            <div className="home-page">
                <div className="home-div">
                    <p>
                        Welcome to Login-Singup Home Page
                    </p>
                    <h2>
                        This website is created using <span id='mern'>MERN</span> Stack
                    </h2>
                </div>
            </div>
        </>
    );
};

export default Home;