import React, { Component } from 'react';

class PracticeCard extends Component {

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

                <div>
                    <button onClick={ this.flipCard }>Flip Card</button>
                </div>

                <br></br>

                <div className="practice-card">
                    <div className="practice-card-text">
                        { this.props.card[this.state.side] }
                    </div>
                </div>

                <br></br>

                <div>
                    <button onClick={ this.props.nextCard }>Next Card</button>
                    <button onClick={ this.props.removeCard }>Remove Card</button>
                </div>

                    
            </div>
        )
    }

}
  
export default PracticeCard