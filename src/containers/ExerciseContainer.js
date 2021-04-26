import React, { Component } from 'react';
import { shuffleCards } from '../helperFunctions/shuffleCards'

class ExerciseContainer extends Component {

    constructor(){
        super()
        this.state = {
            cards: []
        }
    }

    componentDidMount(){
        let cards = shuffleCards(this.props.exercise.deck.cards)
        this.setState({ cards: cards })
    }

    checkState = () => {
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h1>Exercise Container</h1>
                <h2>Level: { this.props.exercise.deck.level }</h2>
                <h2>Deck: { this.props.exercise.deck.name }</h2>
                <h2>Activity: { this.props.exercise.activity }</h2>
                <button onClick={ this.checkState }>Check State</button>
            </div>
        )
    }

}
  
export default ExerciseContainer