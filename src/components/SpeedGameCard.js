import React from 'react';

const SpeedGameCard = ({ term }) => {
    return (
        <div className="speed-card">
            <div className="speed-card-text">
                { term }
            </div>
        </div>
    );
}
  
export default SpeedGameCard