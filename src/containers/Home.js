import React, { Component } from 'react';
import { initializeApp } from '../actions/initializeApp'
import Placeholder from '../components/Placeholder.js'
import OptionsContainer from './OptionsContainer';
import ExerciseContainer from './ExerciseContainer';

class Home extends Component {

    constructor(){
        super()
        this.state = {
            decks: [],
            view: <Placeholder />,
            exercise: {deck: [], level: 0, activity: null}
        }
    }

    componentDidMount(){
       initializeApp(this.setDecks)
    }

    setDecks = (decks) => {
        this.setState({ decks: decks })
    }

    changeView = (view) => {
        this.setState({ view: view })
    }

    checkState = () => {
        console.log(this.state)
    }

    render(){
        return (
        <div>
            <h2>
                <button onClick={ this.checkState }>Check State</button>
                <button onClick={ () => this.changeView(<OptionsContainer decks={ this.state.decks } />) }>Options</button>
                <button onClick={ () => this.changeView(<ExerciseContainer />) }>Exercise</button>
            </h2>
            { this.state.view }
        </div>
        );
    }
  
}

export default Home;