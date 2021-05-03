import React from 'react';

const MultipleChoiceResults = ({ result, exitView }) => {
    return (
        <div>
            <h2>Multiple Choice Results</h2>

            <h3>Score: { result.correctAnswers } / { result.questions }</h3>

            <br></br><br></br><br></br>

            <button onClick={ exitView }>Back to Options</button>
        </div>
    );
}
  
export default MultipleChoiceResults