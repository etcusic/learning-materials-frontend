import React from 'react';

const MultipleChoiceResults = ({ result }) => {
    return (
        <div>
            <h2>Multiple Choice Results</h2>

            <h3>Score: { result.correctAnswers } / { result.questions }</h3>
        </div>
    );
}
  
export default MultipleChoiceResults