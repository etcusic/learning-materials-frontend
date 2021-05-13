import React from 'react';

const BingoCell = ({ card, side }) => {
    return (
        <td key={ `cell-${ card[side] }` } className="bingo-cell">
            <div className="bingo-cell-text">
                { card[side] }
            </div>
        </td>
    );
}
  
export default BingoCell