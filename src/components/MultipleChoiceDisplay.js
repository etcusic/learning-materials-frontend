import React from 'react';

const MultipleChoiceDisplay = ({ currentCard, answer, answerOptions, setAnswer, submitAnswer }) => {
    return (
        <div>
            <h3>Term: "{ currentCard.side_a }"</h3>

            <h3>Answer: "{ answer }"</h3>

            <ul>
                { answerOptions.map((option, i) => {
                    return (
                        <div key={`option-${i + 1}`} >
                            <label>
                            <input
                                type="radio"
                                value={ option }
                                checked={ answer === { option } }
                                onChange={ setAnswer }
                            />
                            { option }
                            </label>
                        </div>
                        
                    )
                })}
            </ul>

            <button onClick={ submitAnswer }>Submit Answer</button>
        </div>
    );
}
  
export default MultipleChoiceDisplay