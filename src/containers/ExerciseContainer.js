import React, { Component } from 'react';
import Placeholder from '../components/Placeholder';
import Practice from '../exercises/Practice';
import MultipleChoice from '../exercises/MultipleChoice';
import SpeedGame from '../exercises/SpeedGame';
import ConnectFour from '../exercises/ConnectFour';

class ExerciseContainer extends Component {

    constructor(){
        super()
        this.state = {
            view: <Placeholder />
        }
    }

    componentDidMount(){
        this.setActivity(this.props.exercise.activity)
    }

    setActivity = activity => {
        switch(activity){
            case 'Practice':
                console.log(activity)
                this.setState({ view: <Practice cards={ this.props.exercise.deck.cards } exitExercise={ this.props.exitExercise } /> })
                break;
            case 'Multiple Choice':
                this.setState({ view: <MultipleChoice cards={ this.props.exercise.deck.cards } exitExercise={ this.props.exitExercise } /> })
                break;
            case 'Speed Game':
                this.setState({ view: <SpeedGame cards={ this.props.exercise.deck.cards } exitExercise={ this.props.exitExercise } /> })
                break;
            case 'Connect Four':
                this.setState({ view: <ConnectFour cards={ this.props.exercise.deck.cards } exitExercise={ this.props.exitExercise } /> })
                break;
            default:
                this.setState({ view: <Placeholder /> })
        }
    }

    render() {
        return (
            <div>
                <h1>Exercise Container</h1>
                { this.state.view }
            </div>
        )
    }

}
  
export default ExerciseContainer