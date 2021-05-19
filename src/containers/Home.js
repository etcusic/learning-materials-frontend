import React, { Component } from 'react';
import { fetchDecks } from '../actions/fetchDecks'
import { createExerciseObject } from '../helperFunctions/createExerciseObject.js'
import { validateExercise } from '../helperFunctions/validateExercise.js'
import Placeholder from '../components/Placeholder.js'
import Welcome from '../components/Welcome.js'
import OptionsContainer from './OptionsContainer';
import ExerciseContainer from './ExerciseContainer';
import BeginExerciseButton from '../components/BeginExerciseButton'
import PleaseWait from '../components/PleaseWait'

class Home extends Component {

    constructor(){
        super()
        this.state = {
            decks: [],
            view: <PleaseWait />
        }
    }

    componentDidMount(){
        const view = <Welcome displayOptions={ this.displayOptions } />
        fetchDecks()
        .then(decks => this.setDecks(decks))
        .then(() => this.changeView(view))
    }

    setDecks = (decks) => {
        this.setState({ decks: decks })
    }

    changeView = (view) => {
        this.setState({ view: view })
    }

    setExercise = (exercise) => {
        let newExercise = createExerciseObject(exercise)
        let validExercise = validateExercise(newExercise)
        if (validExercise) {
            this.setState({ 
                view: <BeginExerciseButton 
                    exercise={ newExercise } 
                    beginExercise={ this.beginExercise } 
                    displayOptions={ this.displayOptions }
                /> })
        }
        
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
            <br></br><br></br><br></br><br></br>
            {/* <button onClick={ this.checkState }>Check State</button> */}
        </div>
        );
    }
  
}

export default Home;