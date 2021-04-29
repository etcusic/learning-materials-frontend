import React, { Component } from 'react';
import { shuffleCards } from '../helperFunctions/shuffleCards'

class Practice extends Component {

    constructor(){
        super()
        this.state = {
            cards: [],
            completedCards: [],
            currentCard: {side_a: "", side_b: ""},
            currentCardIndex: 0
        }
    }

    componentDidMount(){
        let cards = shuffleCards(this.props.cards).map(card => {
            let copy = Object.assign({}, card)
            copy.completed = false
            return copy
        })
        this.setState({ cards: cards })
    }

    checkState = () => {
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <button onClick={ this.checkState }>Check State</button>
                <h2>Practice Exercise</h2>
                <div>
                    <div >
                        <h2>Cards left:</h2>
                        <h3>{ this.state.cards.length - this.state.completedCards.length }</h3>
                    </div>

                    <div >

                    </div>

                    <div >
                        <h2>Cards completed:</h2>
                        <h3>{ this.state.completedCards.length }</h3>
                    </div>

                </div>
            </div>
        )
    }

}
  
export default Practice