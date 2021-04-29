import React, { Component } from 'react';

class Card extends Component {

    constructor(){
        super()
        this.state = {
            side: "side_a"
        }
    }

    render() {
        return (
            <div>
            <h3>Card component: </h3>
                { console.log(this.props.card) }
                { this.props.card[this.state.side] }
            </div>
        )
    }

}
  
export default Card