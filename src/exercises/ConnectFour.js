import React, { Component } from 'react';
import { shuffleCards } from '../helperFunctions/shuffleCards'

class ConnectFour extends Component {

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
                <h2>Connect Four Exercise</h2>
                

                <br></br><br></br>
                <button onClick={ this.props.exitExercise }>Exit Exercise</button>

            </div>
        )
    }

}
  
export default ConnectFour