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
        this.setState({ 
            cards: cards,
            currentCard: currentCard
        })
    }

    shuffleMultipleChoice = () => {
        let shuffledCards = shuffleCards([...this.state.cards.filter((card, i) => i !== this.state.round)])
        let choices = [this.state.cards[this.state.round], ...shuffledCards(0, 3)]
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

                { this.state.view }

                <br></br><br></br><br></br>

                <button onClick={ this.props.exitExercise }>Exit Exercise</button>

            </div>
        )
    }

}
  
export default MultipleChoice