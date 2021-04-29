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
                <h2>Card component: </h2>
                <div className="practice-card">
                    <div>
                        <button onClick={ this.flipCard }>Flip Card</button>
                    </div>

                    <br></br>

                    { this.props.card[this.state.side] }

                    <br></br><br></br>

                    <button onClick={ this.props.nextCard }>Next Card</button>
                    <button onClick={ this.props.removeCard }>Remove Card</button>

                </div>
            </div>
        )
    }

}
  
export default Card