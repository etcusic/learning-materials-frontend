import React, { Component } from 'react';
import Placeholder from '../components/Placeholder';
import Practice from '../exercises/Practice';
import MultipleChoice from '../exercises/MultipleChoice';
import SpeedGame from '../exercises/SpeedGame';
import Bingo from '../exercises/Bingo';
import { shuffleCards } from '../helperFunctions/shuffleCards';

class ExerciseContainer extends Component {

    constructor(){
        super()
        this.state = {
            view: <Placeholder />
        }
    }

    componentDidMount(){
        let activity = this.props.exercise.activity
        this.setActivity(activity)
    }

    setPractice = () => {
        this.setState({ 
            view: <Practice 
                    level={ this.props.exercise.level }
                    deckNames={ this.props.exercise.deckNames } 
                    termDisplay={ this.props.exercise.termDisplay }
                    cardDisplay={ this.props.exercise.cardDisplay }
                    cards={ this.props.exercise.cards } 
                    exitExercise={ this.props.exitExercise } 
            /> 
        })
    }

    setMultipleChoice = () => {
        this.setState({ 
            view: <MultipleChoice 
                    level={ this.props.exercise.level }
                    deckNames={ this.props.exercise.deckNames } 
                    termDisplay={ this.props.exercise.termDisplay }
                    cardDisplay={ this.props.exercise.cardDisplay }
                    cards={ shuffleCards(this.props.exercise.cards) } 
                    exitExercise={ this.props.exitExercise } 
                    changeView={ this.setNewView } 
            /> 
        })
    }

    setSpeedGame = () => {
        this.setState({ 
            view: <SpeedGame 
                    level={ this.props.exercise.level }
                    deckNames={ this.props.exercise.deckNames } 
                    termDisplay={ this.props.exercise.termDisplay }
                    cardDisplay={ this.props.exercise.cardDisplay }
                    cards={ shuffleCards(this.props.exercise.cards) }  
                    exitExercise={ this.props.exitExercise } 
                    changeView={ this.setNewView }
            /> 
        })
    }

    setBingo = () => {
        let shuffledAndSliced = shuffleCards(this.props.exercise.cards).slice(0, 25)
        this.setState({ 
            view: <Bingo 
                    level={ this.props.exercise.level }
                    deckNames={ this.props.exercise.deckNames } 
                    termDisplay={ this.props.exercise.termDisplay }
                    cardDisplay={ this.props.exercise.cardDisplay }
                    cards={ shuffledAndSliced } 
                    exitExercise={ this.props.exitExercise } 
                    changeView={ this.setNewView }
            /> 
        })
    }

    setActivity = (activity) => {
        switch(activity){
            case 'Practice':
                this.setPractice()
                break;
            case 'Multiple Choice':
                this.setMultipleChoice()
                break;
            case 'Speed Game':
                this.setSpeedGame()
                break;
            case 'Bingo':
                this.setBingo()
                break;
            default:
                this.setState({ 
                    view: <Placeholder /> 
                })
        }
    }

    setNewView = component => {
        this.setState({ view: component })
    }

    render() {
        return (
            <div>
                { this.state.view }
            </div>
        )
    }

}
  
export default ExerciseContainer