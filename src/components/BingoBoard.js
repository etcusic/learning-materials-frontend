import React from 'react';

const BingoBoard = ({ matrix }) => {
    return (
        <div>
            <table id="bingo-board">
                <tbody>
                    <tr key="bingo-row-1">
                        { matrix[0].map(bingoCell => bingoCell) }
                    </tr>

                    <tr key="bingo-row-2">
                        { matrix[1].map(bingoCell => bingoCell) }
                    </tr>

                    <tr key="bingo-row-3">
                        { matrix[2].map(bingoCell => bingoCell) }
                    </tr>

                    <tr key="bingo-row-4">
                        { matrix[3].map(bingoCell => bingoCell) }
                    </tr>

                    <tr key="bingo-row-5">
                        { matrix[4].map(bingoCell => bingoCell) }
                    </tr>
                </tbody>
            </table>
        </div>
        
    );
}
  
export default BingoBoard