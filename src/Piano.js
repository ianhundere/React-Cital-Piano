import React, { Component } from 'react';
import Tone from 'tone';

import Key from './Key';

class Piano extends Component {
    constructor(props) {
        super(props);
        const reverb = new Tone.Freeverb(0.7);
        const filter = new Tone.Filter(800, 'lowpass').toMaster();
        this.synth = new Tone.PolySynth().chain(filter).chain(reverb);
    }

    noteOn = note => {
        this.synth.triggerAttackRelease(note);
    };
    noteOff = note => {
        this.synth.triggerRelease(note);
    };

    render() {
        if (this.props.pianoKey) {
            this.synth.triggerAttackRelease(this.props.pianoKey);
        }
        const keyList = this.props.allKeys.map(key => (
            <Key
                key={key}
                synth={this.synth}
                note={key}
                noteOn={this.noteOn}
                noteOff={this.noteOff}
            />
        ));
        return (
            <div
                ref={node => node && node.setAttribute('touch-action', 'none')}
            >
                {keyList}
            </div>
        );
    }
}

export default Piano;
