import React, { Component } from 'react';
import Piano from './Piano';
import Sheetmusic from './Sheetmusic';
import SongList from './SongList';


import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs : [
                {
                    title: 'jingle bells',
                    content: 'E-E-E |  E-E-E |  E-G-C-D-E, F-F-F-F | F-E-E-E | E-D-D-E | D-G'
                },

                {
                    title: 'deck the halls',
                    content: 'G-F-E-D | C-D-E-C'
                },
                {
                    title: 'havana',
                    content: 'C-E-E-C-C-A'
                }
            ]
        }
    }
    render() {
        return (
            <div className="App">
                <Sheetmusic
                content= {'music goes here'} />
                <Piano />
                <SongList 
                songs={this.state.songs.map(song => song.title)}
                    />
            </div>
        );
    }
}

export default App;
