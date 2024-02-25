import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "./GameStyles.css";

const Rules = () => {
  return (
    <div className='row rulesDiv'>
        <div className='col-md-2'>
            <button className='btn btn-outline-success' onClick={() => {
                window.location.href = "/menu";
            }}>Back to Menu</button>
        </div>
        <div className='col-md-8'>
            <h3>Rules Exploding Cat 😸</h3>
            <div className='row'>
                <div className='col-sm-1'>
                    1)
                </div>
                <div className='col-sm-11'>
                    When the game is started there will be a deck of 5 cards ordered randomly. Each time user clicks on the deck a card is revealed and that card is removed from the deck. A player wins the game once he draws all 5 cards from the deck and there is no card left to draw. 
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-1'>
                    2)
                </div>
                <div className='col-sm-11'>
                    If the card drawn from the deck is a cat card, then the card is removed from the deck.
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-1'>
                    3)
                </div>
                <div className='col-sm-11'>
                    If the card is exploding kitten (bomb) then the player loses the game.
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-1'>
                    4)
                </div>
                <div className='col-sm-11'>
                    If the card is a defusing card, then the card is removed from the deck. This card can be used to defuse one bomb that may come in subsequent cards drawn from the deck.
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-1'>
                    5)
                </div>
                <div className='col-sm-11'>
                    If the card is a shuffle card, then the game is restarted and the deck is filled with 5 cards again.
                </div>
            </div>
            
        </div>
        <div className='col-md-2'></div>
    </div>
  )
}

export default Rules
