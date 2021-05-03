import React, { Component } from 'react';
import { shuffleCards } from '../helperFunctions/shuffleCards'

class MultipleChoice extends Component {

    constructor(){
        super()
        this.state = {
            cards: [],
            round: 0,
            correctAnswers: 0,
            currentCard: {side_a: "Side A", side_b: "Side B"}, 
            answerOptions: ["A", "B", "C", "D"],
            answer: ""
        }
    }

    componentDidMount(){
        let cards = shuffleCards(this.props.cards)
        let currentCard = cards[0]
        let answerOptions = shuffleCards(cards.slice(0, 4)).map(card => card.side_b)
        this.setState({ 
            cards: cards,
            currentCard: currentCard,
            answerOptions: answerOptions
        })
    }

    setAnswer = (event) => {
        this.setState({
            answer: event.target.value
        });
    }

    submitAnswer = () => {
        let point = this.state.answer === this.state.currentCard.side_b ? 1 : 0
        if (this.state.answer === ""){
            console.log("invalid response")
        } else if ((this.state.round + 1) === this.state.cards.length) {
            console.log("round is over")
            this.setState({
                round: (this.state.round + 1),
                correctAnswers: (this.state.correctAnswers + point)
            })
        } else {
            this.setNextRound(point)
        }
    }

    shuffleMultipleChoice = (nextRound) => {
        let cards = [...this.state.cards].filter((card, i) => i !== (nextRound))
        let shuffledCards = shuffleCards(cards)
        let choices = [this.state.cards[nextRound], ...shuffledCards.slice(0, 3)]
        return choices
    }

    setNextRound = (point) => {
        const nextRound = this.state.round + 1
        const addPoint = this.state.correctAnswers + point
        const options = this.shuffleMultipleChoice(nextRound)
        const shuffledOptions = shuffleCards([...options]).map(card => card.side_b)
        this.setState({
            round: nextRound,
            correctAnswers: addPoint,
            currentCard: options[0], 
            answerOptions: shuffledOptions,
            answer: ""
        })
    }

    checkState = () => {
        console.log(this.state)
    }

    render() {
        return (    
            <div>
                <button onClick={ this.checkState }>Check State</button>
                
                <h2>Multiple Choice Exercise</h2>

                <h3>Score: { this.state.correctAnswers } / { this.state.round }</h3>

                <h3>Term: "{ this.state.currentCard.side_a }"</h3>

                <h3>Answer: "{ this.state.answer }"</h3>

                <ul>
                    { this.state.answerOptions.map((option, i) => {
                        return (
                            <div key={`option-${i + 1}`} >
                                <label>
                                <input
                                    type="radio"
                                    value={ option }
                                    checked={ this.state.answer === { option } }
                                    onChange={ this.setAnswer }
                                />
                                { option }
                                </label>
                            </div>

                        )
                    })}
                </ul>

                <button onClick={ this.submitAnswer }>Submit Answer</button>

                <br></br><br></br><br></br>

                <button onClick={ this.props.exitExercise }>Exit Exercise</button>

            </div>
        )
    }

}
  
export default MultipleChoice