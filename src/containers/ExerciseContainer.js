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
                <button onClick={ this.checkState }>Check State</button>
                <h1>Exercise Container</h1>
            </div>
        )
    }

}
  
export default ExerciseContainer