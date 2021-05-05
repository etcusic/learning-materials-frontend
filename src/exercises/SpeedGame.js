import React, { Component } from 'react';
import { shuffleCards } from '../helperFunctions/shuffleCards'
import SpeedGameBoard from '../components/SpeedGameBoard'

class SpeedGame extends Component {

    constructor(){
        super()
        this.state = {
            round: 0,
            score: 0,
            timer: 11,
            currentSet: [{side_a: "Side A", side_b: "Side B"}]
        }
    }

    componentDidMount(){
        this.setRound(0, 0)
    }

    initializeGame = () => {
        
    }

    selectCard = (answer) => {
        let score = this.state.score
        answer === this.state.currentSet[0]["side_b"] ? score += this.state.timer : score -= this.state.timer
        let nextRound = this.state.round + 1
        this.setRound(score, nextRound)
    }

    setRound = (score, round) => {
        let filteredCards = [...this.props.cards.filter((card, i) => i !== round)]
        let currentSet = [this.props.cards[round], ...shuffleCards(filteredCards).slice(0, 3)]
        this.setState({
            round: round,
            score: score,
            timer: 11,
            currentSet: currentSet
        })
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