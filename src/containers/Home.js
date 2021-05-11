import React, { Component } from 'react';
import { initializeApp } from '../actions/initializeApp'
import { createExerciseObject } from '../helperFunctions/createExerciseObject.js'
import Placeholder from '../components/Placeholder.js'
import Welcome from '../components/Welcome.js'
import OptionsContainer from './OptionsContainer';
import ExerciseContainer from './ExerciseContainer';
import BeginExerciseButton from '../components/BeginExerciseButton'

class Home extends Component {

    constructor(){
        super()
        this.state = {
            decks: [],
            view: <Placeholder />
        }
    }

    componentDidMount(){
       initializeApp(this.setDecks)
       this.setState({ view: <Welcome displayOptions={ this.displayOptions } /> })
    }

    setDecks = (decks) => {
        this.setState({ decks: decks })
    }

    changeView = (view) => {
        this.setState({ view: view })
    }

    setExercise = (exercise) => {
        console.log(exercise)
        let newExercise = createExerciseObject(exercise)
        this.setState({ 
            view: <BeginExerciseButton 
                    exercise={ newExercise } 
                    beginExercise={ this.beginExercise } 
                    displayOptions={ this.displayOptions }
                /> })
    }

    displayOptions = () => {
        this.setState({ 
            view: <OptionsContainer 
                    decks={ this.state.decks } 
                    setExercise={ this.setExercise } 
            />
        })
    }

    beginExercise = (exercise) => {
        this.setState({ 
            view: <ExerciseContainer 
                    exercise={ exercise } 
                    exitExercise={ this.displayOptions } 
                    changeView={ this.changeView } 
            />
        })
    }

    checkState = () => {
        console.log(this.state)
    }

    render(){
        return (
        <div>
            { this.state.view }
        </div>
        );
    }
  
}

export default Home;