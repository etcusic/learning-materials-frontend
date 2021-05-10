import React, { Component } from 'react';

class OptionsContainer extends Component {

    constructor(){
        super()
        this.state = { 
            level: 0, 
            deckId: 0,
            activity: "invalid"
        }
    }

    displayLevels = () => {
        const levels = [1]
        return (
            <select onChange={ event => this.changeLevel(event) }>
                <option key="level-0" value="0">-- select level --</option>
                { levels.map((level, i) => <option key={`level-${i + 1}`} value={ level }>{ level }</option>) }
            </select>
        )
    }

    displayActivities = () => {
        const activities = ["Practice", "Multiple Choice", "Speed Game", "Bingo"]
        return (
            <select onChange={ event => this.changeActivity(event) }>
                <option key="activity-0" value="invalid">-- select activity --</option>
                { activities.map((activity, i) => <option key={`activity-${i + 1}`} value={ activity }>{ activity }</option>) }
            </select>
        )
    }

    changeLevel = (event) => {
        let value = parseInt(event.target.value)
        this.setState({ level: value })
    }

    changeDeck = (event) => {
        let value = parseInt(event.target.value)
        this.setState({ deckId: value })
    }

    changeActivity = (event) => {
        let value = event.target.value
        this.setState({ activity: value })
    }

    checkState = () => {
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h1>Select an exercise.</h1>
                
                <h2>
                    <label>Level: </label>
                    { this.displayLevels() }
                </h2>
                
                <h2>
                    <label>Deck: </label>
                    <select onChange={ event => this.changeDeck(event) }>
                        <option key="deck-0" value="0">-- select deck --</option>
                        { this.props.decks
                                    .filter(deck => deck.level === this.state.level)
                                    .map((deck, i) => <option key={`deck-${i + 1}`} value={deck.id}>{ deck.name }</option>) 
                        }
                    </select>
                </h2>
                
                <h2>
                    <label>Activity: </label>
                    { this.displayActivities() }
                </h2>

                <h3>
                    { this.state.deckId === 0 || 
                        this.state.level === 0 || 
                        this.state.activity === "invalid" ? 
                        "All fields must be valid to continue" : 
                        <button onClick={ () => this.props.setExercise(this.state) }>Set Exercise</button>
                    }
                </h3>
                
            </div>
        )
    }

}
  
export default OptionsContainer