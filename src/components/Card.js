import React, { Component } from 'react';

class Card extends Component {

    constructor(){
        super()
        this.state = {
            side: "side_a"
        }
    }

    flipCard = () => {
        this.state.side === "side_a" ? this.setState({ side: "side_b" }) : this.setState({ side: "side_a" })
    }

    render() {
        return (
            <div>
                <h3>Card component: </h3>
                <div className="practice-card">
                    
                    <div className="practice-checkbox">
                        <input type="checkbox"></input>
                    </div>
                    <br></br>

                    { this.props.card[this.state.side] }

                    <br></br><br></br>
                    <div>
                        <button onClick={ this.flipCard }>Flip Card</button>
                    </div>

                </div>
            </div>
        )
    }

}
  
export default Card