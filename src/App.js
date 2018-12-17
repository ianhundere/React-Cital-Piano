import React, { Component } from 'react';
import Piano from './Piano';

import './App.css';

class App extends Component {
    constructor(props) {
        console.log(document);
        super(props);
        this.state = {
            key: []
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
            this.setState({
                key: [...this.state.key, this.keyTranslation[e.key]]
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
                />
            </div>
        );
    }
}

export default App;
