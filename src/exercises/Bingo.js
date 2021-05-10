import React, { Component } from 'react';
import { shuffleCards } from '../helperFunctions/shuffleCards'

class Bingo extends Component {

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

                <h2>Bingo Exercise</h2>
                
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0EUZ9lFKA-kWb2ddapVYDtN_JLECaISv7Eg&usqp=CAU" alt="exercise under construction"></img>

                <br></br><br></br>
  
                <button onClick={ this.props.exitExercise }>Exit Exercise</button>
            </div>
        )
    }

}
  
export default Bingo