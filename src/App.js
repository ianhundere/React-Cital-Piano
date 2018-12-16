import React, { Component } from 'react';
import Piano from './Piano';
import Sheetmusic from './Sheetmusic';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Sheetmusic />
                <Piano />
            </div>
        );
    }
}

export default App;
