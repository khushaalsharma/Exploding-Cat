import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "./MainStyles.css"

const Menu = () => {
  return (
    <div className='menu'>
        <h1>MENU</h1>
        <div className='menu-btn'><button className='btn btn-outline-success' onClick={() => {
            window.location.href = "/newgame";
        }}>Start the Game</button>
        </div>
        <div className='menu-btn'>
          <button className='btn btn-outline-success' onClick={() => {
            window.location.href = "/scoreboard";
        }}>View Scoreboard</button>
        </div>
        <div className='menu-btn'>
          <button className='btn btn-outline-success' onClick={() => {
            window.location.href = "/rules"
        }}>View Rules</button>
        </div>
    </div>
  )
}

export default Menu
