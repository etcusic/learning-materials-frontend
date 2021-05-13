import React, { Component } from 'react';
import { shuffleCards } from '../helperFunctions/shuffleCards'
import BingoBoard from '../components/BingoBoard'
import BingoCell from '../components/BingoCell'

class Bingo extends Component {

    constructor(){
        super()
        this.state = {
            round: 0,
            boardMatrix: [[], [], [], [], []]
        }
    }

    componentDidMount(){
        console.log(this.props)
        let boardCards = shuffleCards([...this.props.cards])
        this.setState({
            boardMatrix: [
                boardCards.slice(0, 5).map((card, index) => this.createBingoCell(card, index, 0)),
                boardCards.slice(5, 10).map((card, index) => this.createBingoCell(card, index, 1)),
                boardCards.slice(10, 15).map((card, index) => this.createBingoCell(card, index, 2)),
                boardCards.slice(15, 20).map((card, index) => this.createBingoCell(card, index, 3)),
                boardCards.slice(20).map((card, index) => this.createBingoCell(card, index, 4))
        ]
        })
    }

    createBingoCell = (card, index, row) => {
        return (
            <BingoCell 
                row={ row }
                column={ index }
                card={ card } 
                side={ this.props.cardDisplay }
                color={ "yellow" }
                selectCard={ this.selectCard }
            />
        )
    }

    selectCard = (x) => {
        console.log(x)
    }

    checkState = () => {
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <button onClick={ this.checkState }>Check State</button>

                <h2>Bingo Exercise:</h2>
                <div>
                    ( { this.props.deckNames.join(", ")} )
                </div>
                
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0EUZ9lFKA-kWb2ddapVYDtN_JLECaISv7Eg&usqp=CAU" alt="exercise under construction"></img> */}

                <h1>Term:  { this.props.cards[this.state.round][this.props.termDisplay] }</h1>

                <BingoBoard matrix={ this.state.boardMatrix } />

                <br></br><br></br>
  
                <button onClick={ this.props.exitExercise }>Exit Exercise</button>
            </div>
        )
    }

}
  
export default Bingo