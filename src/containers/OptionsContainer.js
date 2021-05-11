import React, { Component } from 'react';

class OptionsContainer extends Component {

    constructor(){
        super()
        this.state = { 
            level: 0, 
            decks: [],
            activity: "invalid",
            displaySide: "invalid"
        }
    }

    displayLevels = () => {
        // will need to add sets with different levels
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

    displaySides = () => {
        const sides = ["english", "spanish"]
        return (
            <select onChange={ event => this.changeDisplaySide(event) }>
                <option key="side-0" value="invalid">-- select display side --</option>
                { sides.map((side, i) => <option key={`${side}`} value={ side }>{ side }</option>) }
            </select>
        )
    }

    changeLevel = (event) => {
        let value = parseInt(event.target.value)
        this.setState({ level: value })
    }

    changeActivity = (event) => {
        let value = event.target.value
        this.setState({ activity: value })
    }

    changeDisplaySide = (event) => {
        let value = event.target.value
        this.setState({ displaySide: value })
    }

    addDeck = (event) => {
        let value = parseInt(event.target.value)
        let decks = [...this.state.decks]
        if (event.target.checked){
            decks.push(this.props.decks.find( deck => deck.id === value ))
        } else {
            decks = decks.filter(deck => deck.id !== value)
        }
        this.setState({ decks: decks })
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
                    <label>Activity: </label>
                    { this.displayActivities() }
                </h2>

                <h2>
                    <label>Display side: </label>
                    { this.displaySides() }
                </h2>

                <h2>
                    <label>Deck{`(s):`} </label>
                </h2>
                    { 
                        this.props.decks
                                    .filter(deck => deck.level === this.state.level)
                                    .map((deck, i) => {
                                        return (
                                            <div key={ deck.name } >
                                                <input 
                                                    type="checkbox"
                                                    value={ deck.id } 
                                                    onChange={ this.addDeck } 
                                                />
                                                <label>
                                                    { deck.name } - { deck.cards.length }
                                                </label>
                                            </div>
                                        )
                        })
                    }
                
                <h3>
                    {   // check to make sure all fields are valid => if true, display button
                        this.state.decks.length === 0 || 
                        this.state.level === 0 || 
                        this.state.activity === "invalid" ||
                        this.state.displaySide === "invalid" 
                        ? 
                        "All fields must be valid to continue" 
                        : 
                        <button onClick={ () => this.props.setExercise(this.state) }>Set Exercise</button>
                    }
                </h3>
                
            </div>
        )
    }

}
  
export default OptionsContainer