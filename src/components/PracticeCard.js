import React, { Component } from 'react';

class PracticeCard extends Component {

    constructor(){
        super()
        this.state = {
            side: "english"
        }
    }

    componentDidMount(){
        this.setState({ side: this.props.front })
    }

    flipCard = () => {
        this.state.side === "english" ? this.setState({ side: "spanish" }) : this.setState({ side: "english" })
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