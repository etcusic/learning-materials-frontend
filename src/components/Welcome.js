import React from 'react';

const Welcome = ({ displayOptions }) => {
    return (
        <div>
            <h1>Welcome!</h1>
            <h2>Press button to get started</h2>
            <button onClick={ displayOptions }>View Options</button>
        </div>
    );
}
  
export default Welcome