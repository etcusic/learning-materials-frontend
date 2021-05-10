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
        this.setActivity(this.props.exercise.activity)
    }

    setPractice = () => {
        this.setState({ 
            view: <Practice 
                    deckName={ this.props.exercise.deck.name } 
                    cards={ this.props.exercise.deck.cards } 
                    exitExercise={ this.props.exitExercise } 
            /> 
        })
    }

    setMultipleChoice = () => {
        this.setState({ 
            view: <MultipleChoice 
                    deckName={ this.props.exercise.deck.name } 
                    cards={ this.props.exercise.deck.cards } 
                    exitExercise={ this.props.exitExercise } 
                    setNewView={ this.setNewView } 
            /> 
        })
    }

    setSpeedGame = () => {
        let cards = shuffleCards(this.props.exercise.deck.cards)
        this.setState({ 
            view: <SpeedGame 
                    deckName={ this.props.exercise.deck.name } 
                    cards={ cards } 
                    exitExercise={ this.props.exitExercise } 
            /> 
        })
    }

    setBingo = () => {
        this.setState({ 
            view: <Bingo 
                    deckName={ this.props.exercise.deck.name } 
                    cards={ this.props.exercise.deck.cards } 
                    exitExercise={ this.props.exitExercise } 
                    changeView={ this.props.changeView }
            /> 
        })
    }

    setActivity = activity => {
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
                <h1>Exercise Container</h1>
                { this.state.view }
            </div>
        )
    }

}
  
export default ExerciseContainer