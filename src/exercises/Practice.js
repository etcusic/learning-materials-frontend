import React, { Component } from 'react';
import { shuffleCards } from '../helperFunctions/shuffleCards'
import PracticeCard from '../components/PracticeCard'

class Practice extends Component {

    constructor(){
        super()
        this.state = {
            cards: [{side_a: "A", side_b: "B"}],
            completedCards: [],
            currentCardIndex: 0,
            nextRoundButton: false
        }
    }

    componentDidMount(){
        let cards = shuffleCards(this.props.cards)
        this.setState({ 
            cards: cards
        })
    }

    nextCard = () => {
        let index = this.state.currentCardIndex + 1
        index < this.state.cards.length ? 
        this.setState({ currentCardIndex: index }) :
        this.setState({ 
            currentCardIndex: 0,
            nextRoundButton: true 
        })    
    }

    removeCard = () => {
        let card = Object.assign({}, this.state.cards[this.state.currentCardIndex])
        let completedCards = [...this.state.completedCards]
        completedCards.push(card)
        let cards = [...this.state.cards].filter((card, index) => index !== this.state.currentCardIndex)
        // check if it is the last card and display accordingly
        let trueOrFalse = (this.state.cards.length - 1) === this.state.currentCardIndex ? true : false
        let index = trueOrFalse ? 0 : this.state.currentCardIndex
        this.setState({
            cards: cards,
            completedCards: completedCards,
            currentCardIndex: index,
            nextRoundButton: trueOrFalse
        })
    }

    nextRound = () => {
        this.setState({ 
            currentCardIndex: 0,
            nextRoundButton: false
        })
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
                    <div>
                        <h3>Cards left: { this.state.cards.length }</h3>
                    </div>

                    <div>
                        <h3>Cards completed: { this.state.completedCards.length }</h3>
                    </div>

                    <div>
                        <h3>Current Card: { this.state.currentCardIndex + 1 } / { this.state.cards.length }</h3>
                    </div>

                    <div>
                        {
                            this.state.nextRoundButton ?
                            <button onClick={ this.nextRound }>Next Round</button> :
                            <PracticeCard 
                                card={ this.state.cards[this.state.currentCardIndex] } 
                                removeCard={ this.removeCard } 
                                nextCard={ this.nextCard}
                            />
                        }
                    </div>

                    <br></br><br></br>
                    <button onClick={ this.props.exitExercise }>Exit Exercise</button>

                </div>
            </div>
        )
    }

}
  
export default Practice