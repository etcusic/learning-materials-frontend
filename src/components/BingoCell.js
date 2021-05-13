import React from 'react';

const BingoCell = ({ row, column, card, side, color, selectCard }) => {
    return (
        <td 
            key={ `bingo-cell-${row}-${column}` } 
            className="bingo-cell"
            style={{ backgroundColor: color }}
            onClick={ () => selectCard("check one two") }
        >
            <div className="bingo-cell-text">
                { card[side] }
            </div>
        </td>
    );
}
  
export default BingoCell