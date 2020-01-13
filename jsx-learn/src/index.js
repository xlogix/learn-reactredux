//import react, reactdom libs
import React from 'react';
import ReactDOM from 'react-dom';
//create react components
const App = () => {
    const buttonText = { text: 'Click Me' };
    const labelText = 'Enter Name:';
    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {buttonText.text}
            </button>
        </div>
    );
};
//show react components on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);