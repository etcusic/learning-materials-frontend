import React from 'react';

const BeginExerciseButton = ({ exercise, beginExercise, displayOptions }) => {
    return (
        <div>
            <button onClick={ displayOptions }>Back to Options</button>
            <h2>Level: { exercise.level }</h2>
            <h2>Deck(s): </h2>
            <div>
                { exercise.deckNames.join(" || ") }
            </div>
            <h2>Activity: { exercise.activity }</h2>
            <button onClick={ () => beginExercise(exercise) }>Begin Exercise!</button>
        </div>
    );
}
  
export default BeginExerciseButton