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
        };
        this.keyTranslation = {
            a: 'B3',
            s: 'C4',
            e: 'C#4',
            d: 'D4',
            r: 'D#4',
            f: 'E4',
            g: 'F4',
            y: 'F#4',
            h: 'G4',
            u: 'G#4',
            j: 'A4',
            i: 'A#4',
            k: 'B4'
        };
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
            // console.log(e.key);
        });

        
       
            
        

    }
    render() {
        return (
            <div className="App">

                <Piano
                    pianoKey={this.state.key}
                    allKeys={Object.values(this.keyTranslation)}
                    newKeys={this.state.newKeys}
                    oldKeys={this.state.oldKeys}
                    insertKey={this._insertKey}
                    extractKey={this._extractKey}
                />
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

                <Sheetmusic
                title= {this._getById(this.state.currentSongId).title}
                content= {this._getById(this.state.currentSongId).content} />
                <Piano />
                <SongList 
                // songs={this.state.songs.map(song => song.title)}
                songs= {this.state.songs}
                handleClick={this._setCurrentSongId}
                    />
           
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
