import React, { Component } from 'react';
import { shuffleCards } from '../helperFunctions/shuffleCards'

class SpeedGame extends Component {

    constructor(){
        super()
        this.state = {

        }
    }

    componentDidMount(){
        let cards = shuffleCards(this.props.cards)
        this.setState({ 
            cards: cards
        })
    }

    checkState = () => {
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <button onClick={ this.checkState }>Check State</button>
                
                <h2>Speed Game Exercise</h2>
                
                <img src=".../public/under_construction.png" alt="exercise under construction"></img>

                <br></br><br></br>

                <button onClick={ this.props.exitExercise }>Exit Exercise</button>

            </div>
        )
    }

}
  
export default SpeedGame