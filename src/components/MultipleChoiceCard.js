import React from 'react';

const MultipleChoiceCard = ({ index, option, color, selectCard }) => {
    return (
        <div key={`option-${index}`} style={{ backgroundColor: color }} className="practice-card" onClick={ () => selectCard(option) }>
            <div className="practice-card-text">
                { option }
            </div>
        </div>
    );
}
  
export default MultipleChoiceCard