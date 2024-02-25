import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "./GameStyles.css";

const Cardbox = (data) => {

  console.log(data);

  return (
    <div className='card'>
        <div className='cardEmoji'>
            {data.data[0]}
        </div>
        <div className='cardName'>
            {data.data[1]}
        </div>
    </div>
  )
}

export default Cardbox
