import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./MainStyles.css";

const MainPage = () => {
  return (
    <div className='exploding-kitten'>
        <div className='exploding-kitten-title'>
            <h1>Exploding Kitten 😸</h1>
        </div>
        <div className='button-tab'>
            <button className='btn btn-dark start-btn' onClick={() => {
              window.location.href = "/login"
            }}>Start Game</button>
        </div>
    </div>
  )
}

export default MainPage
