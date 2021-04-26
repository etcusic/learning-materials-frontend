import React, { Component } from 'react';

class OptionsContainer extends Component {

    constructor(){
        super()
        this.state = {
            deck: {}, 
            level: 0, 
            activity: null
        }
    }

    changeLevel = (event) => {
        let value = event.target.value
        this.setState({ level: value })
    }

    changeDeck = (event) => {
        let value = event.target.value
        console.log(value)
        console.log(this.props.decks.find(deck => deck.id == value))
        this.setState({ deck: this.props.decks.find(deck => deck.id == value) })
    }

    changeActivity = (event) => {
        let value = event.target.value
        console.log(value)
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
                <select onChange={ event => this.changeLevel(event) }>
                    <option value="0">0</option>
                    <option value="1">1</option>
                </select>

                <label>Deck: </label>
                <select onChange={ event => this.changeDeck(event) }>
                    { this.props.decks
                                .filter(deck => deck.level == this.state.level)
                                .map(deck => <option value={deck.id}>{ deck.name }</option>) 
                    }
                </select>

                <label>Activity: </label>
                <select onChange={ event => this.changeActivity(event) }>
                    <option value="practice">practice</option>
                    <option value="multiple choice">multiple choice</option>
                    <option value="speed">speed</option>speed
                    <option value="connect four">connect four</option>
                </select>
            </div>
        )
    }

}
  
export default OptionsContainer