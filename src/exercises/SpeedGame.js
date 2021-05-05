import React, { Component } from 'react';
import { shuffleCards } from '../helperFunctions/shuffleCards'
import SpeedGameBoard from '../components/SpeedGameBoard'

class SpeedGame extends Component {

    constructor(){
        super()
        this.state = {
            cards: [],
            round: 0,
            score: 0,
            timer: 11,
            currentSet: [{side_a: "Side A", side_b: "Side B"}]
        }
    }

    componentDidMount(){
        let cards = shuffleCards(this.props.cards)
        let currentSet = shuffleCards([...cards.slice(0, 4)])
        this.setState({ 
            cards: cards,
            currentSet: currentSet
        })
    }

    initializeGame = () => {
        
    }

    selectCard = (answer) => {
        let score = this.state.score
        answer === this.state.currentSet[0]["side_b"] ? score += this.state.timer : score -= this.state.timer
        console.log(answer)
        console.log(this.state.currentSet[0]["side_b"])
        console.log(this.state.currentSet[0]["side_a"])
        this.setRound(score)
    }

    setRound = (score) => {
        console.log(score)
    }

    checkState = () => {
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <button onClick={ this.checkState }>Check State</button>
                
                <h2>Speed Game Exercise - { this.props.deckName }</h2>

                <h3>Total Rounds: { this.props.cards.length }</h3>

                <h3>Score: { this.state.score }</h3>

                <h3>Timer: { this.state.timer }</h3>

                <h1>- { this.state.currentSet[0]["side_a"] } -</h1>

                <SpeedGameBoard 
                    cards={this.state.currentSet } 
                    selectCard={ this.selectCard }
                />

                <br></br><br></br>

                <button onClick={ this.props.exitExercise }>Exit Exercise</button>

            </div>
        )
    }

}
  
export default SpeedGame