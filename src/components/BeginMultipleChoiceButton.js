import React from 'react';

const BeginMultipleChoiceButton = ({ beginExercise }) => {
    return (
        <div>
            <h2>Begin Multiple Choice</h2>
            <button onClick={ beginExercise }>Click!</button>
        </div>
    );
}
  
export default BeginMultipleChoiceButton