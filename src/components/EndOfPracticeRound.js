import React from 'react';

const EndOfPracticeRound = ({ nextRound, resetDeck }) => {
    return (
        <div>
            <div>
                <button onClick={ nextRound }>Next Round</button>
            </div>

            <br></br><br></br>

            <div>
                <button onClick={ resetDeck }>Reset Practice</button>
            </div>
        </div>
    );
}
  
export default EndOfPracticeRound