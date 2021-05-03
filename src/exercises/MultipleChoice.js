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

    shuffleMultipleChoice = () => {
        let shuffledCards = shuffleCards([...this.state.cards.filter((card, i) => (i + 1) !== this.state.round)])
        let choices = [this.state.cards[this.state.round + 1], ...shuffledCards(0, 3)]
        return shuffleCards(choices)
    }

    setRound = () => {

    }

    setAnswer = (event) => {
        this.setState({
            answer: event.target.value
        });
    }

    checkAnswer = () => {

    }

    submitAnswer = () => {

    }

    checkState = () => {
        console.log(this.state)
        this.shuffleMultipleChoice()
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