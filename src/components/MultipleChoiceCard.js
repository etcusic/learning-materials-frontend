import React from 'react';

const MultipleChoiceCard = ({ index, option, color, selectCard }) => {
    return (
        <div 
            key={`option-${index}`} 
            className="practice-card" 
            style={{ backgroundColor: color }} 
            onClick={ () => selectCard(option) }
        >
            <div className="practice-card-text">
                { option }
            </div>
        
        </div>
    );
}
  
export default MultipleChoiceCard