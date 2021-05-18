import React from 'react';

const SpeedGameOver = ({ deckNames, score, exitView }) => {
    return (
        <div>
            <h2>Speed Game Results:</h2>

            <h3>Deck(s): { deckNames.join(", ") }</h3>   

            <h3>Score: { score }</h3>

            <br></br><br></br><br></br>

            <button onClick={ exitView }>Back to Options</button>
        </div>
    );
}
  
export default SpeedGameOver