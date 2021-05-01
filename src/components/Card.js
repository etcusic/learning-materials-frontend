import React from 'react';

const Card = ({ side }) => {
    return (
        <div className="practice-card">
            <div className="practice-card-text">
                { side }
            </div>
        </div>
    );
}
  
export default Card