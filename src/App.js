import React, { Component } from 'react';
import Piano from './Piano';
import Sheetmusic from './Sheetmusic';
import SongList from './SongList';


import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSongId: 1,
            songs : [
                {
                    id: 1,
                    title: 'jingle bells',
                    content: 'E-E-E |  E-E-E |  E-G-C-D-E, F-F-F-F | F-E-E-E | E-D-D-E | D-G'
                },

                {
                    id: 2,
                    title: 'deck the halls',
                    content: 'G-F-E-D | C-D-E-C'
                },
                {
                    id: 3,
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
                title= {this._getById(this.state.currentSongId).title}
                content= {this._getById(this.state.currentSongId).content} />
                <Piano />
                <SongList 
                // songs={this.state.songs.map(song => song.title)}
                songs= {this.state.songs}
                handleClick={this._setCurrentSongId}
                    />
            </div>
        );
    }

    _setCurrentSongId = (songId) => {
        console.log(`this current song id is ${songId}`)
        this.setState({
            currentSongId: songId
        })
    }

    _getById = (idToFind) => {
        const theOne = this.state.songs.find(song => {
            return song.id === idToFind
        });
        return theOne;
    }
}

export default App;
