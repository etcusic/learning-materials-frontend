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
        let deckNames = this.props.exerce.decks.map(deck => deck.name).join(", ")
        let cards = shuffleCards(this.props.exercise.deck.cards)
        this.setActivity(activity, deckNames, cards)
    }

    setPractice = (deckNames, cards) => {
        this.setState({ 
            view: <Practice 
                    deckNames={ deckNames } 
                    cards={ cards } 
                    exitExercise={ this.props.exitExercise } 
            /> 
        })
    }

    setMultipleChoice = (deckNames, cards) => {
        this.setState({ 
            view: <MultipleChoice 
                    deckNames={ deckNames } 
                    cards={ cards } 
                    exitExercise={ this.props.exitExercise } 
                    setNewView={ this.setNewView } 
            /> 
        })
    }

    setSpeedGame = (deckNames, cards) => {
        this.setState({ 
            view: <SpeedGame 
                    deckNames={ deckNames } 
                    cards={ cards } 
                    exitExercise={ this.props.exitExercise } 
            /> 
        })
    }

    setBingo = (deckNames, cards) => {
        this.setState({ 
            view: <Bingo 
                    deckNames={ deckNames } 
                    cards={ cards } 
                    exitExercise={ this.props.exitExercise } 
                    changeView={ this.props.changeView }
            /> 
        })
    }

    setActivity = (activity, deckNames, cards) => {
        switch(activity){
            case 'Practice':
                this.setPractice(deckNames, cards)
                break;
            case 'Multiple Choice':
                this.setMultipleChoice(deckNames, cards)
                break;
            case 'Speed Game':
                this.setSpeedGame(deckNames, cards)
                break;
            case 'Bingo':
                this.setBingo(deckNames, cards)
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