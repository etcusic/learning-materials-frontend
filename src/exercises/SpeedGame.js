import React, { Component } from 'react';
import { shuffleCards } from '../helperFunctions/shuffleCards'
import { sleepOneSecond } from '../helperFunctions/sleepOneSecond'
import SpeedGameBoard from '../components/SpeedGameBoard'
import SpeedGameOver from '../components/SpeedGameOver';

class SpeedGame extends Component {

    constructor(){
        super()
        this.state = {
            round: 0,
            score: 0,
            timer: 11,
            currentSet: [{english: "English Side", spanish: "Spanish Side"}],
            inPlay: true
        }
    }

    componentDidMount(){
        console.log(this.props)
        this.initializeGame()
    }

    initializeGame = () => {
        this.setRound(0, 0)
        this.timerMinusOne()
    }

    timerMinusOne = () => {
        let time = this.state.timer - 1
        if (time > 0 && this.state.inPlay){
            this.setState({ timer: time })
            sleepOneSecond()
            .then(this.timerMinusOne)
        } else if ((this.state.round + 1) < this.props.cards.length && this.state.inPlay) {
            console.log(`round ${this.state.round + 1} === ${this.props.cards.length}`)
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
        answer === this.props.cards[this.state.round][this.props.cardDisplay] ? score += this.state.timer : score -= this.state.timer
        let nextRound = this.state.round + 1
        this.setRound(score, nextRound)
    }

    setRound = (score, round) => {
        if (round >= this.props.cards.length){
            console.log("End Game")
            this.endGame(score)
        } else {
            let filteredCards = [...this.props.cards.filter((card, i) => i !== round)]
            let currentSet = shuffleCards([this.props.cards[round], ...shuffleCards(filteredCards).slice(0, 3)])
            this.setState({
                round: round,
                score: score,
                timer: 11,
                currentSet: currentSet
            })
        }
    }

    endGame = (score) => {
        this.setState({
            round: 0,
            score: score,
            timer: 11,
            currentSet: [{english: "", spanish: ""}, {english: "", spanish: ""}, {english: "", spanish: ""}, {english: "", spanish: ""}],
            inPlay: false
        })
    }

    gameOver = () => {
        // need to add a view that shows game score - maybe send a game log fetch request as well
        console.log("Game Over")
        this.props.changeView(
            <SpeedGameOver 
                deckNames={ this.props.deckNames } 
                score={ this.state.score } 
                exitView={ this.props.exitExercise } 
            />
        )
    }

    checkState = () => {
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <button onClick={ this.checkState }>Check State</button>
                
                <h2>Speed Game Exercise:</h2>
                <div>
                    ( { this.props.deckNames.join(", ")} )
                </div>

                <h3>Round: { this.state.round + 1 } / { this.props.cards.length }</h3>

                <h3>Score: { this.state.score }</h3>

                <h3>Timer: { this.state.timer }</h3>

                <h1>- { this.props.cards[this.state.round][this.props.termDisplay] } -</h1>

                <SpeedGameBoard 
                    cardDisplay={ this.props.cardDisplay }
                    cards={ this.state.currentSet } 
                    selectCard={ this.selectCard }
                />

                <br></br><br></br>

                <button onClick={ this.props.exitExercise }>Exit Exercise</button>

            </div>
        )
    }

}
  
export default SpeedGame