/**
 * Created by Scott on 6/5/2016.
 */
//Any JS in here is automatically ran
//Import React library and Component prototype
import React, { Component } from 'react';
//Import react-dom
import ReactDOM from 'react-dom';
//Import ImageList component
import ImageList from './components/image_list';
//Import axios to temporarily make Imgur api connection
import axios from 'axios';

//Create the main App component
class App extends Component {
    constructor(props) {
        super(props);

        //Initializes state object as an array
        this.state = { images: [] };
    }

    componentWillMount() {
        //Good place to load data.  Will be called once per component use
        axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
            .then(response => this.setState({ images: response.data.data }));
    }

    render() {
        return (
            <div>
                <ImageList />
            </div>
        );
    }
};

//Render this component to the screen
Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.container'));
});
