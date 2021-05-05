import React from 'react';

const SpeedGameCard = ({ term, selectCard }) => {
    return (
        <td className="speed-card" onClick={() => selectCard(term)}>
            <div className="speed-card-text">
                { term }
            </div>
        </td>
    );
}
  
export default SpeedGameCard