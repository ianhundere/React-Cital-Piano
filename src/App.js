import React, { Component } from 'react';
import Piano from './Piano';
import Sheetmusic from './Sheetmusic';
import SongList from './SongList';


import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Sheetmusic />
                <Piano />
                <SongList 
                songs={[
                    'jingle bells',
                    'deck the halls',
                    'havana'
                ]}
                    />
            </div>
        );
    }
}

export default App;
