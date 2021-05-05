import React, { Component } from 'react';
import { shuffleCards } from '../helperFunctions/shuffleCards'
import MultipleChoiceCard from '../components/MultipleChoiceCard.js'
import MultipleChoiceResults from '../components/MultipleChoiceResults.js'

class MultipleChoice extends Component {

    constructor(){
        super()
        this.state = {
            cards: [],
            round: 0,
            correctAnswers: 0,
            currentCard: {side_a: "Side A", side_b: "Side B"}, 
            answerOptions: ["", "", "", ""],
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
            alert('Invalid response. Please select one of the options!')
        } else if ((this.state.round + 1) < this.state.cards.length) {
            this.setNextRound(point)
        } else {
            const totalPoints = this.state.correctAnswers + point
            this.endMultipleChoiceRound(totalPoints)
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

    endMultipleChoiceRound = (points) => {
        const result = {
            questions: this.props.cards.length, 
            correctAnswers: points
        }
        const newView = <MultipleChoiceResults 
                            deckName={ this.props.deckName } 
                            result={ result } 
                            exitView={ this.props.exitExercise } 
                        />
        this.props.setNewView(newView)
    }

    checkState = () => {
        console.log(this.state)
    }

    selectCard = (option) => {
        this.setState({
            answer: option
        });
    }

    render() {
        return (    
            <div>
                <button onClick={ this.checkState }>Check State</button>
                
                <h2>Multiple Choice Exercise - { this.props.deckName } </h2>

                <h3># of Questions: { this.props.cards.length }</h3>

                <h3>Score: { this.state.correctAnswers } / { this.state.round }</h3>

                <h1>- { this.state.currentCard.side_a } -</h1>

                <ul>
                { 
                    this.state.answerOptions.map((option, i) => {
                        return ( 
                            <MultipleChoiceCard 
                                index={ i }
                                option={ option } 
                                answer={ this.state.answer }
                                color={ option === this.state.answer ? "#ffc40c" : "cadetblue" }
                                selectCard={ this.selectCard }
                            />
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