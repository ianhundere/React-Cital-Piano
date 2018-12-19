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
                    title: 'Jingle bells',
                    content:
                        'E-E-E |  E-E-E |  E-G-C-D-E, F-F-F-F | F-E-E-E | E-D-D-E | D-G',
                    // keyboard:
                    //     'C-C-C | C-C-C | C-B-Z-X-C '
                    chords: ''
                },

                {
                    id: 2,
                    title: 'Deck the halls',
                    content: 'G-F-E-D | C-D-E-C | D-E-F-D-E | D-C-B-C',
                    chords: ''
                },
                {
                    id: 3,
                    title: 'Havana // camila cabello',
                    content: 'C-E-E-C-C-A | E-D-E-F-E-D-C ',
                    chords: ''
                },

                {
                    id: 4,
                    title: 'Christmas time is here // vince guaraldi',
                    content:
                        'E-C-C-A-A | E-C-C-A-A | A-F-F | E-G-E-E | D#-D-F-D| F-G',
                    chords: 'F/A |C/E'
                }
            ]
        };
        this.keyTranslation = {
            z: 'C4',
            s: 'C#4',
            x: 'D4',
            d: 'D#4',
            c: 'E4',
            v: 'F4',
            g: 'F#4',
            b: 'G4',
            h: 'G#4',
            n: 'A4',
            j: 'A#4',
            m: 'B4',
            q: 'C5',
            '2': 'C#5',
            w: 'D5',
            '3': 'D#5',
            e: 'E5',
            r: 'F5',
            '5': 'F#5',
            t: 'G5',
            '6': 'G#5',
            y: 'A5',
            '7': 'A#5',
            u: 'B5',
            i: 'C6'
        };

        this.keyNames = [
            'C4',
            'C#4',
            'D4',
            'D#4',
            'E4',
            'F4',
            'F#4',
            'G4',
            'G#4',
            'A4',
            'A#4',
            'B4',
            'C5',
            'C#5',
            'D5',
            'D#5',
            'E5',
            'F5',
            'F#5',
            'G5',
            'G#5',
            'A5',
            'A#5',
            'B5',
            'C6'
        ];

        this.kbNames = [
            ('Z',
            'S',
            'X',
            'D',
            'C',
            'V',
            'G',
            'B',
            'N',
            'N',
            'J',
            'M',
            'Q',
            '2',
            'W',
            '3',
            'E',
            'R',
            '5',
            'T',
            '6',
            'Y',
            '7',
            'U',
            'I')
        ];
    }
    componentDidMount() {
        document.addEventListener('keydown', e => {
            let key = this.keyTranslation[e.key];
            console.log(key);
            console.log(this.state.newKeys);
            let isNew = !this.state.newKeys.includes(key);
            if (isNew) {
                this.setState({
                    newKeys: [...this.state.newKeys, key]
                });
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
                    <h1>React-Cital Piano</h1>
                    <Sheetmusic
                        title={this._getById(this.state.currentSongId).title}
                        content={
                            this._getById(this.state.currentSongId).content
                        }
                        chords={this._getById(this.state.currentSongId).chords}
                    />
                    <SongList
                        // songs={this.state.songs.map(song => song.title)}
                        songs={this.state.songs}
                        handleClick={this._setCurrentSongId}
                    />
                    <Piano
                        pianoKey={this.state.key}
                        allKeys={this.keyNames}
                        newKeys={this.state.newKeys}
                        oldKeys={this.state.oldKeys}
                        insertKey={this._insertKey}
                        extractKey={this._extractKey}
                        isActive={this.state.isActive}
                    />
                    <footer>Ian Hundere // Amelia Schulz</footer>
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
