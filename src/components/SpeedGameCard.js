import React from 'react';

const SpeedGameCard = ({ term }) => {
    return (
        <td className="speed-card">
            <div className="speed-card-text">
                { term }
            </div>
        </td>
    );
}
  
export default SpeedGameCard