import React from 'react';

const BingoCell = ({ keyId, card, side }) => {
    return (
        <td key={ keyId } className="bingo-cell">
            <div className="bingo-cell-text">
                { card[side] }
            </div>
        </td>
    );
}
  
export default BingoCell