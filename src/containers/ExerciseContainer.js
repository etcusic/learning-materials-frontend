import React, { Component } from 'react';
import Practice from '../exercises/Practice';
import { shuffleCards } from '../helperFunctions/shuffleCards'

class ExerciseContainer extends Component {

    render() {
        return (
            <div>
                <h1>Exercise Container</h1>
                <Practice cards={ this.props.exercise.deck.cards } />
            </div>
        )
    }

}
  
export default ExerciseContainer