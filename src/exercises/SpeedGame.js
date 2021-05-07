import React, { Component } from 'react';
import { shuffleCards } from '../helperFunctions/shuffleCards'
import { sleepOneSecond } from '../helperFunctions/sleepOneSecond'
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
        this.initializeGame()
    }

    initializeGame = () => {
        this.setRound(0, 0)
        this.timerMinusOne()
    }

    timerMinusOne = () => {
        let time = this.state.timer - 1
        if (time > 0){
            console.log(time)
            this.setState({ timer: time })
            sleepOneSecond()
            .then(this.timerMinusOne)
        } else if ((this.state.round + 1) <= this.props.cards.length) {
            console.log("time up!")
            console.log(`round => ${this.state.round + 1} | cards => ${this.props.cards.length}`)
            let score = this.state.score - 10
            let round = this.state.round + 1
            this.setRound(score, round)
            sleepOneSecond()
            .then(this.timerMinusOne)
        } else {
            return this.gameOver()
        }
    }

    selectCard = (answer) => {
        let score = this.state.score
        answer === this.props.cards[this.state.round]["side_b"] ? score += this.state.timer : score -= this.state.timer
        let nextRound = this.state.round + 1
        this.setRound(score, nextRound)
    }

    setRound = (score, round) => {
        if (round >= this.props.cards.length){
            this.gameOver()
        } else {
            let filteredCards = [...this.props.cards.filter((card, i) => i !== round)]
            let currentSet = shuffleCards([this.props.cards[round], ...shuffleCards(filteredCards).slice(0, 3)])
            // let shuffledSet = shuffleCards(currentSet)
            console.log(`currentSet => ${currentSet.map(card => card.side_a)}`)
            console.log(`currentCard => ${this.props.cards[round].side_a}`)
            this.setState({
                round: round,
                score: score,
                timer: 11,
                currentSet: currentSet
            })
        }
        
    }

    gameOver = () => {
        console.log("Game Over")
        return "Game Over"
    }

    checkState = () => {
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <button onClick={ this.checkState }>Check State</button>
                
                <h2>Speed Game Exercise - { this.props.deckName }</h2>

                <h3>Round: { this.state.round + 1 } / { this.props.cards.length }</h3>

                <h3>Score: { this.state.score }</h3>

                <h3>Timer: { this.state.timer }</h3>

                <h1>- { this.props.cards[this.state.round]["side_a"] } -</h1>

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