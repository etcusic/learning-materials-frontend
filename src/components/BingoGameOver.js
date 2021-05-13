import React from 'react';
import BingoBoard from '../components/BingoBoard'

const BingoGameOver = ({ message, boardMatrix, exitExercise }) => {
    return (
        <div>
            <h1>{ message }</h1>

            <BingoBoard matrix={ boardMatrix } />

            <br></br><br></br><br></br>

            <button onClick={ exitExercise }>Back to Options</button>
        </div>
    );
}
  
export default BingoGameOver