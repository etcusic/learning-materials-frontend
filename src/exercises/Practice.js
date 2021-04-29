import React, { Component } from 'react';
import { shuffleCards } from '../helperFunctions/shuffleCards'
import Card from '../components/Card'

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
        index === this.state.cards.length ? this.setState({ nextRoundButton: true }) : this.setState({ currentCardIndex: index })      
    }

    removeCard = () => {
        let card = Object.assign({}, this.state.cards[this.state.currentCardIndex])
        let completedCards = [...this.state.completedCards]
        completedCards.push(card)
        let cards = [...this.state.cards].filter((card, index) => index !== this.state.currentCardIndex)
        this.setState({
            cards: cards,
            completedCards: completedCards
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
                            <Card 
                                card={ this.state.cards[this.state.currentCardIndex] } 
                                removeCard={ this.removeCard } 
                                nextCard={ this.nextCard}
                            />
                        }
                    </div>

                </div>
            </div>
        )
    }

}
  
export default Practice