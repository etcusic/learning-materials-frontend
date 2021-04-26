import React, { Component } from 'react';

class OptionsContainer extends Component {

    constructor(){
        super()
        this.state = {
            deck: [], 
            level: 0, 
            activity: null
        }
    }

    render() {
        return (
            <div>
                <h1>Options Container</h1>
                
                <label>Level: </label>
                <select>
                    <option value="0">0</option>
                    <option value="1">1</option>
                </select>

                <label>Deck: </label>
                <select>
                    { this.props.decks.map(deck => {
                        if (deck.level == this.state.level){
                            <option value={deck.id}>deck.name</option>
                        }
                    }) }
                </select>

                <label>Activity: </label>
                <select>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                </select>
            </div>
        )
    }

}
  
export default OptionsContainer