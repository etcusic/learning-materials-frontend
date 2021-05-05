import React, { Component } from 'react';
import { shuffleCards } from '../helperFunctions/shuffleCards'
import SpeedGameCard from '../components/SpeedGameCard'

class SpeedGame extends Component {

    constructor(){
        super()
        this.state = {
            cards: [],
            round: 0,
            score: 0,
            currentSet: [{side_a: "Side A", side_b: "Side B"}],
            currentCard: {side_a: "Side A", side_b: "Side B"}
        }
    }

    componentDidMount(){
        let cards = shuffleCards(this.props.cards)
        let currentSet = shuffleCards([...cards.slice(0, 4)])
        this.setState({ 
            cards: cards,
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

                <h3>Score: { this.state.correctAnswers } / { this.state.round }</h3>

                {/* TIMER GOES HERE */}

                <h1>- { this.state.currentSet[this.state.round]["side_a"] } -</h1>

                <h2>Cards go here</h2>
                
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0EUZ9lFKA-kWb2ddapVYDtN_JLECaISv7Eg&usqp=CAU" alt="exercise under construction"></img> */}

                <br></br><br></br>

                <button onClick={ this.props.exitExercise }>Exit Exercise</button>

            </div>
        )
    }

}
  
export default SpeedGame