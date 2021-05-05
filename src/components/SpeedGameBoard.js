import React from 'react';
import { shuffleCards } from '../helperFunctions/shuffleCards';
import SpeedGameCard from './SpeedGameCard'


const SpeedGameBoard = ({ cards }) => {
    
    let shuffledCards = shuffleCards(cards)

    return (
        <table>
            <tr>
            { shuffledCards.map(card => {
                return (
                    <SpeedGameCard 
                        term={ card["side_b"] }
                    />
                )
            })}
            </tr>

        </table>
    );
}
  
export default SpeedGameBoard