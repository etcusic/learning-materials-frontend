import React, { Component } from 'react';

class OptionsContainer extends Component {

    constructor(){
        super()
        this.state = {
            deckId: 0, 
            level: 0, 
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
        const activities = ["Practice", "Multiple Choice", "Speed Game", "Connect Four"]
        return (
            <select onChange={ event => this.changeActivity(event) }>
                <option key="activity-0" value="invalid">-- select activity --</option>
                { activities.map((activity, i) => <option key={`activity-${i + 1}`} value={ activity }>{ activity }</option>) }
            </select>
        )
    }

    completeOptions = () => {
        return (
            <div>
                All fields must be valid to continue
            </div>
        )
    }

    displayButton = () => {
        return <button onClick={ () => this.props.setExercise(this.state) }>Set Exercise</button>
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
                <h1>Options Container</h1>
                
                <button onClick={ this.checkState }>Check State</button>
                
                <label>Level: </label>
                { this.displayLevels() }

                <label>Deck: </label>
                <select onChange={ event => this.changeDeck(event) }>
                    <option key="deck-0" value="0">-- select deck --</option>
                    { this.props.decks
                                .filter(deck => deck.level === this.state.level)
                                .map((deck, i) => <option key={`deck-${i + 1}`} value={deck.id}>{ deck.name }</option>) 
                    }
                </select>

                <label>Activity: </label>
                { this.displayActivities() }

                { this.state.deckId === 0 || this.state.level === 0 || this.state.activity === "invalid" ? this.completeOptions() : this.displayButton()  }
                
            </div>
        )
    }

}
  
export default OptionsContainer