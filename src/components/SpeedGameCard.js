import React from 'react';

const SpeedGameCard = ({ index, term, selectCard }) => {
    return (
        <td key={`speed-card-${index}`} className="speed-card" onClick={() => selectCard(term)}>
            <div className="speed-card-text">
                { term }
            </div>
        </td>
    );
}
  
export default SpeedGameCard