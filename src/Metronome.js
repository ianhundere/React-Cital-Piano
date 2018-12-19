import React, { Component } from 'react';
import soundfile from './sounds/housedrop.wav';

import Tone from 'tone';

import './index.css';
class Metronome extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '120' };
        this.player = new Tone.Player({
            url: soundfile
        }).toMaster();

        Tone.Buffer.on('load', () => {
            Tone.Transport.scheduleRepeat(time => {
                this.player.start(time);
            }, '4n');
            console.log('should be starting');
        });
    }

    _start = () => {
        console.log('Starting some shit');
        Tone.Transport.start();
        this.player.sync().start();
    };

    _stop = () => {
        console.log('Stopping some shit');
        Tone.Transport.stop();
        this.player.sync().stop();
    };

    _submitBPM = e => {
        const bpm = parseInt(this.state.text);
        e.preventDefault();
        Tone.Transport.bpm.value = bpm;
    };

    render() {
        return (
            <div>
                <button className="button" onClick={this._start}>
                    Start
                </button>
                <button className="button" onClick={this._stop}>
                    Stop
                </button>
                <form onSubmit={this._submitBPM}>
                    <input
                        id="bpm"
                        type="number"
                        value={this.state.text}
                        onChange={this._updateText}
                    />
                    <br />
                    <button className="button" type="submit">
                        Enter BPM
                    </button>
                </form>
            </div>
        );
    }
    _updateText = event => {
        const newText = event.target.value;
        console.log(this);
        this.setState({
            text: newText
        });
    };
}
export default Metronome;
