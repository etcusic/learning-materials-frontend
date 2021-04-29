import React, { Component } from 'react';
import Practice from '../exercises/Practice';

class ExerciseContainer extends Component {

    render() {
        return (
            <div>
                <h1>Exercise Container</h1>
                <Practice cards={ this.props.exercise.deck.cards } exitExercise={ this.props.exitExercise } />
            </div>
        )
    }

}
  
export default ExerciseContainer