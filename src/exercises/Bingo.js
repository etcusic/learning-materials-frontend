import React, { Component } from 'react';
import { shuffleCards } from '../helperFunctions/shuffleCards'
import { checkBingoWinner } from '../helperFunctions/checkBingoWinner'
import BingoBoard from '../components/BingoBoard'
import BingoCell from '../components/BingoCell'
import BingoGameOver from '../components/BingoGameOver'

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
                boardCards.slice(0, 5).map((card, index) => this.createBingoCell(card, 0, index, "yellow")),
                boardCards.slice(5, 10).map((card, index) => this.createBingoCell(card, 1, index, "yellow")),
                boardCards.slice(10, 15).map((card, index) => this.createBingoCell(card, 2, index, "yellow")),
                boardCards.slice(15, 20).map((card, index) => this.createBingoCell(card, 3, index, "yellow")),
                boardCards.slice(20).map((card, index) => this.createBingoCell(card, 4, index, "yellow"))
            ]
        })
    }

    createBingoCell = (card, row, index, color) => {
        return (
            <BingoCell 
                row={ row }
                column={ index }
                card={ card } 
                side={ this.props.cardDisplay }
                color={ color }
                selectCard={ this.selectCard }
            />
        )
    }

    selectCard = (card, row, column) => {
        let term = this.props.cards[this.state.round][this.props.termDisplay]
        let answer = card[this.props.termDisplay]
        term === answer ? this.executeAnswer(card, row, column, "green") : this.executeAnswer(card, row, column, "red")
    }

    executeAnswer = (card, row, column, color) => {
        let boardMatrix = [...this.state.boardMatrix]
        let bingoCell = this.createBingoCell(card, row, column, color)
        boardMatrix[row][column] = bingoCell
        this.checkAnswer(boardMatrix)
    }

    checkAnswer = boardMatrix => {
        let nextRound = this.state.round + 1
        if (checkBingoWinner(boardMatrix)){
            this.endGame("You won, yay!!!", boardMatrix)
        } else if (nextRound > 24){
            this.endGame("You lost, bummer.", boardMatrix)
        } else {
            this.setState({
                round: nextRound,
                boardMatrix: boardMatrix
            })
        }
    }

    endGame = (message, boardMatrix) => {
        this.props.changeView(
            <BingoGameOver 
                message={ message }
                boardMatrix={ boardMatrix }
                exitExercise={ this.props.exitExercise }
            />
        )
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

                <h2>Round: {`${this.state.round + 1} / 25`}</h2>

                <h1>Term:  { this.props.cards[this.state.round][this.props.termDisplay] }</h1>

                <BingoBoard matrix={ this.state.boardMatrix } />

                <br></br><br></br><br></br>
  
                <button onClick={ this.props.exitExercise }>Exit Exercise</button>
            </div>
        )
    }

}
  
export default Bingo