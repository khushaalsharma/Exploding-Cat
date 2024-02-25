import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import "./ScoreStyles.css";
import IndiScore from './IndiScore';

const Scoreboard = () => {
    return (
        <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-8 scoreboard'>
                <h3>SCOREBOARD</h3>
                <div className='row'>
                    <div className='col'><h6>S.No.</h6></div>
                    <div className='col'><h6>Name</h6></div>
                    <div className='col'><h6>Score</h6></div>
                </div>
                <IndiScore/>
                <IndiScore/>
                <IndiScore/>
            </div>
            <div className='col-md-2 scoreboard'>
                <button className='btn btn-outline-primary' onClick={() => {
                    window.location.href = "/menu"
                }}>Back to Menu</button>
            </div>
        </div>
    )
}

export default Scoreboard
