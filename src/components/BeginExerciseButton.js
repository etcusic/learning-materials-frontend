import React from 'react';

const BeginExerciseButton = ({ exercise, beginExercise, displayOptions }) => {
    return (
        <div>
            <button onClick={ displayOptions }>Back to Options</button>
            <h2>Level: { exercise.deck.level }</h2>
            <h2>Deck: { exercise.deck.name }</h2>
            <h2>Activity: { exercise.activity }</h2>
            <button onClick={ () => beginExercise(exercise) }>Begin Exercise!</button>
        </div>
    );
}
  
export default BeginExerciseButton