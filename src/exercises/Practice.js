import React, { Component } from 'react';
import { shuffleCards } from '../helperFunctions/shuffleCards'

class Practice extends Component {

    constructor(){
        super()
        this.state = {
            cards: []
        }
    }

    componentDidMount(){
        let cards = shuffleCards(this.props.cards)
        this.setState({ cards: cards })
    }

    checkState = () => {
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <button onClick={ this.checkState }>Check State</button>
                <h2>Practice Exercise</h2>
            </div>
        )
    }

}
  
export default Practice