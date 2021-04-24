import React, { Component } from 'react';
import { initializeApp } from '../actions/initializeApp'

class Home extends Component {

    constructor(){
        super()
        this.state = {
            decks: []
        }
    }

    componentDidMount(){
       initializeApp(this.setDecks)
    }

    setDecks = (decks) => {
        this.setState({ decks: decks })
    }

    checkState = () => {
        console.log(this.state)
    }

    render(){
        return (
        <div>
            <h1>Home Page</h1>
            <h2><button onClick={ this.checkState }>Check State</button></h2>
        </div>
        );
    }
  
}

export default Home;