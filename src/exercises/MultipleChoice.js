import React, { Component } from 'react';
import { shuffleCards } from '../helperFunctions/shuffleCards'

class MultipleChoice extends Component {

    constructor(){
        super()
        this.state = {
            currentCard: {side_a: "Side A", side_b: "Side B"},
            answerOptions: ["A", "B", "C", "D"],
            answer: ""
        }
    }

    componentDidMount(){
        let cards = shuffleCards(this.props.cards)
        this.setState({ 
            cards: cards
        })
    }

    onValueChange = (event) => {
        console.log(event.target.value)
        this.setState({
            answer: event.target.value
        });
    }

    checkState = () => {
        console.log(this.state)
    }

    render() {
        return (    
            <div>
                <button onClick={ this.checkState }>Check State</button>
                
                <h2>Multiple Choice Exercise</h2>

                <h3>Term: "{ this.state.currentCard.side_a }"</h3>

                <h3>Answer: "{ this.state.answer }"</h3>

                <ul>
                    { this.state.answerOptions.map((option, i) => {
                        return (
                            <div>
                                <label>
                                <input
                                    key={`option-${i + 1}`} 
                                    type="radio"
                                    value={ option }
                                    checked={ this.state.selectedOption === { option } }
                                    onChange={ this.onValueChange }
                                />
                                { option }
                                </label>
                            </div>
                            
                        )
                    })}
                </ul>

                <br></br><br></br>

                <button onClick={ this.props.exitExercise }>Exit Exercise</button>

            </div>
        )
    }

}
  
export default MultipleChoice