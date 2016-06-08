/**
 * Created by Scott on 6/5/2016.
 */
//Any JS in here is automatically ran
//Import React library
import React from 'react';
//Import react-dom
import ReactDOM from 'react-dom';
//Import ImageList component
import ImageList from './components/image_list';
//Import axios to temporarily make Imgur api connection
import axios from 'axios';

//Create a component
const App = () => {
    return (
        <div>
            <ImageList />
        </div>
    );
};

//Render this component to the screen
Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.container'));
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
        .then(response => console.log(response));
});
