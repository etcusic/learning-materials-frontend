import React, { Component } from 'react';

class ExerciseContainer extends Component {

    constructor(){
        super()
        this.state = {

        }
    }

    componentDidMount(){
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <h1>Exercise Container</h1>
                <h2>Level: { this.props.exercise.deck.level }</h2>
                <h2>Deck: { this.props.exercise.deck.name }</h2>
                <h2>Activity: { this.props.exercise.activity }</h2>
            </div>
        )
    }

}
  
export default ExerciseContainer