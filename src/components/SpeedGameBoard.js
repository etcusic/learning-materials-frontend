import React from 'react';
import SpeedGameCard from './SpeedGameCard'


const SpeedGameBoard = ({ cards, selectCard }) => {

    return (
        <table>
            <tr>
            { cards.map(card => {
                return (
                    <SpeedGameCard 
                        term={ card["side_b"] }
                        selectCard={ selectCard }
                    />
                )
            })}
            </tr>

        </table>
    );
}
  
export default SpeedGameBoard