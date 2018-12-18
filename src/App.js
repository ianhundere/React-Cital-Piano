import React, { Component } from 'react';
import Piano from './Piano';
import Sheetmusic from './Sheetmusic';
import SongList from './SongList';

import './App.css';

class App extends Component {
    constructor(props) {
        console.log(document);
        super(props);
        this.state = {
            key: [],
            newKeys: [],
            oldKeys: [],
            currentSongId: 1,
            songs: [
                {
                    id: 1,
                    title: 'jingle bells',
                    content:
                        'E-E-E |  E-E-E |  E-G-C-D-E, F-F-F-F | F-E-E-E | E-D-D-E | D-G'
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
        };
        this.keyTranslation = {
            'z': 'C4',
            's': 'C#4',
            'x': 'D4',
            'd': 'D#4',
            'c': 'E4',
            'v': 'F4',
            'g': 'F#4',
            'b': 'G4',
            'h': 'G#4',
            'n': 'A4',
            'j': 'A#4',
            'm': 'B4',
            'q': 'C5',
            '2': 'C#5',
            'w': 'D5',
            '3': 'D#5',
            'e': 'E5',
            'r': 'F5',
            '5': 'F#5',
            't': 'G5',
            '6': 'G#5',
            'y': 'A5',
            '7': 'A#5',
            'u': 'B5',
            'i': 'C6',
            
            
            
            
            
            
        };

        // this.keyNames = [
        //     {key: 5, val: 'C4'},
        //     {key: s, val: 'C#4'},
        //     {key:x,val: 'D4'},
        //     {key:d,val: 'D#4'},
        //     {key:c,val: 'E4'},
        //     {key:v,val: 'F4'},
        //     {key:g,val: 'F#4'},
        //     {key:b,val: 'G4'},
        //     {key:h,val: 'G#4'},
        //     {key:n,val: 'A4'},
        //     {key:j,val: 'A#4'},
        //     {key:m,val: 'B4'},
        //     {key:q,val: 'C5'},
        //     {key:2,val: 'C#5'},
        //     {key:w,val: 'D5'},
        //     {key:3,val: 'D#5'},
        //     {key:e,val: 'E5'},
        //     {key:r,val: 'F5'},
        //     {key:5,val: 'F#5'},
        //     {key:t,val: 'G5'},
        //     {key:6,val: 'G#5'},
        //     {key:y,val: 'A5'},
        //     {key:7,val: 'A#5'},
        //     {key:u,val: 'B5'},
        //     {key:i,val: 'C6'}
            
        // ]
        
            
        
    }
    componentDidMount() {
        document.addEventListener('keydown', e => {
            let key = this.keyTranslation[e.key];
            console.log(key);
            console.log(this.state.newKeys);
            let isNew = !this.state.newKeys.includes(key);
            if (isNew) {
                this.setState({ newKeys: [...this.state.newKeys, key] });
            } else {
                this.setState({
                    newKeys: this.state.newKeys.filter(k => {
                        return k !== key;
                    })
                });
            }
            console.log();
            // console.log(e.key);
        });
        document.addEventListener('keyup', e => {
            const key = this.keyTranslation[e.key];
            this.setState({
                oldKeys: [...this.state.oldKeys, key]
            });
            console.log();
            console.log(e.key);
        });
    }
    render() {
        return (
            <div className="App">
                <div>
                    <Sheetmusic
                        title={this._getById(this.state.currentSongId).title}
                        content={
                            this._getById(this.state.currentSongId).content
                        }
                    />
                    <SongList
                        // songs={this.state.songs.map(song => song.title)}
                        songs={this.state.songs}
                        handleClick={this._setCurrentSongId}
                    />
                    <Piano
                        pianoKey={this.state.key}
                        allKeys={Object.entries(this.keyTranslation)}
                        newKeys={this.state.newKeys}
                        oldKeys={this.state.oldKeys}
                        insertKey={this._insertKey}
                        extractKey={this._extractKey}
                    />
                </div>
            </div>
        );
    }
    _insertKey = key => {
        this.setState({
            newKeys: this.state.newKeys.filter(note => {
                if (note === key) {
                    return false;
                } else {
                    return true;
                }
            })
        });
    };
    _extractKey = key => {
        this.setState({
            oldKeys: this.state.oldKeys.filter(note => {
                if (note === key) {
                    return false;
                } else {
                    return true;
                }
            })
        });
    };

    _setCurrentSongId = songId => {
        console.log(`this current song id is ${songId}`);
        this.setState({
            currentSongId: songId
        });
    };

    _getById = idToFind => {
        const theOne = this.state.songs.find(song => {
            return song.id === idToFind;
        });
        return theOne;
    };
}

export default App;
