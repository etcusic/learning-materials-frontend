import React, { Component } from 'react';
import { shuffleCards } from '../helperFunctions/shuffleCards'
import Card from '../components/Card'

class Practice extends Component {

    constructor(){
        super()
        this.state = {
            cards: [{side_a: "A", side_b: "B"}],
            completedCards: [],
            currentCardIndex: 0
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
        this.setState({
            currentCardIndex: index
        })
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
                        <h2>Cards left:</h2>
                        <h3>{ this.state.cards.length }</h3>
                    </div>

                    <div>
                        <h2>Cards completed:</h2>
                        <h3>{ this.state.completedCards.length }</h3>
                    </div>

                    <div>
                        <Card card={ this.state.cards[this.state.currentCardIndex] } removeCard={ this.removeCard } />
                    </div>
                    
                    <button onClick={ this.nextCard }>Next Card</button>
                    <button onClick={ this.removeCard }>Remove Card</button>

                </div>
            </div>
        )
    }

}
  
export default Practice