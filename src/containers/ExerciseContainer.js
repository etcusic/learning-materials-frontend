import React, { Component } from 'react';
import Placeholder from '../components/Placeholder';
import Practice from '../exercises/Practice';
import MultipleChoice from '../exercises/MultipleChoice';
import SpeedGame from '../exercises/SpeedGame';
import Bingo from '../exercises/Bingo';
import { shuffleCards } from '../helperFunctions/shuffleCards';
import { notEnoughCards } from '../errors/notEnoughCards';

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
                    setNewView={ this.setNewView } 
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
            /> 
        })
    }

    setBingo = () => {
        // check for valid this.props.exercise.cards.length => throw error
        if (this.props.exercise.cards.length < 24){
            notEnoughCards("Bingo")
        } else {
            this.setState({ 
                view: <Bingo 
                        level={ this.props.exercise.level }
                        deckNames={ this.props.exercise.deckNames } 
                        termDisplay={ this.props.exercise.termDisplay }
                        cardDisplay={ this.props.exercise.cardDisplay }
                        cards={ shuffleCards(this.props.exercise.cards) } 
                        exitExercise={ this.props.exitExercise } 
                        changeView={ this.props.changeView }
                /> 
            })
        }
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
                <h1>Exercise Container</h1>
                { this.state.view }
            </div>
        )
    }

}
  
export default ExerciseContainer