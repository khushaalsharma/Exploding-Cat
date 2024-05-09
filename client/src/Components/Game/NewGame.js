import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "./GameStyles.css";
import Cardbox from './Cardbox';

const cards = ["cat", "bomb", "diffuse", "shuffle"]

const cardMap = new Map();

cardMap.set("cat", ["😸","Cat Card"]);
cardMap.set("bomb", ["💣", "Exploding Kitten Card"]);
cardMap.set("diffuse", ["🙅‍♂️", "Defuse Card"]);
cardMap.set("shuffle", ["🔀", "Shuffle Card"]);

function DrawCard(){
    return cards[Math.floor(Math.random()*4)];
}

const NewGame = () => {

    const [newGame, setNewGame] = useState(false);
    const [lifeline, setLifeline] = useState(0);
    const [draws, setDraws] = useState(5);
    const [cardDetail, setCardDetail] = useState(["", ""]);

    const explodingkittengame = () => {

        if(draws === 0){
            alert("Congratulations! You won the game");
        }
        else{
            let drawnCard = DrawCard(); //contains the card drwan randomly

            if(drawnCard === "cat"){
                setDraws((prevDraws) => {
                    return prevDraws - 1;
                });

                setCardDetail(cardMap.get(drawnCard));
            }
            else if(drawnCard === "bomb"){
                if(lifeline !== 0){
                    setLifeline((prevLifeline) => {
                        return prevLifeline - 1;
                    });
                    setDraws((prevDraws) => {
                        return prevDraws - 1;
                    });
                }
                else{
                    alert("The Kitty Exploded 🥲🥲");
                    setDraws(5);
                    setLifeline(0);
                    //setNewGame(false);
                    setCardDetail(cardMap.get(drawnCard))
                }
            }
            else if(drawnCard === "diffuse"){
                setLifeline((prevLifeline) => {
                    return prevLifeline+1;
                });
                setDraws((prevDraws) => {
                    return prevDraws-1;
                });
                setCardDetail(cardMap.get(drawnCard))
            }
            else{
                setDraws(5);
                setLifeline(0);
                setCardDetail(cardMap.get(drawnCard))
            }
        } 
    }

    const handleDrawCard = () => {
        if(!newGame){
            setNewGame(true);
        }

        explodingkittengame();
        
    }

    return (
        <div className='newgame'>
        <div className='newgametitle'>
            <h2>Let's play Exploding Kitten 🐈</h2>
        </div>
        <div className='game'>
            <div className='gameMenu'>
                <button className='btn btn-outline-light' onClick={() => {
                    window.location.href = "/rules"
                }}>View Rules</button>
            </div>
            <div className='cardPlace'>
                {newGame? <Cardbox data={cardDetail}/> :"Click below to start the game👇"}
                <div className='draw-tab'>
                    <button className='btn btn-primary' onClick={handleDrawCard}>Draw Card</button>
                </div>
            </div>
            <div className='gameData'>
                <h6>Diffuse Card Lifeline:{lifeline}</h6>
                <h6>Draws Left: {draws}</h6>
            </div>
        </div>
        </div>
    )
}

export default NewGame
