import React from 'react';
import SpeedGameCard from './SpeedGameCard'


const SpeedGameBoard = ({ cardDisplay, cards, selectCard }) => {

    return (
        <table>
            <tbody>
                <tr>
                { cards.map((card, index) => {
                    return (
                        <SpeedGameCard 
                            index={ index }
                            term={ card[cardDisplay] }
                            selectCard={ selectCard }
                        />
                    )
                })}
                </tr>
            </tbody>
        </table>
    );
}
  
export default SpeedGameBoard