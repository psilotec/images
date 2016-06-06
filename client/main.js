/**
 * Created by Scott on 6/5/2016.
 */
//Any JS in here is automatically ran for us

//Import React library
import React from 'react';

//Import react-dom
import ReactDOM from 'react-dom';

//Create a component
const App = () => {
    return (
        <div>
            React App #2
        </div>
    );
};

//Render this component to the screen
Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.container'));
});
