import React from 'react';

const Welcome = ({ displayOptions }) => {
    return (
        <div>
            <h1>Welcome!</h1>
            <h2>Practice Spanish / English</h2>
            <button onClick={ displayOptions }>Get Started</button>
        </div>
    );
}
  
export default Welcome