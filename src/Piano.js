import React, { Component } from 'react';
import Tone from 'tone';

import Key from './Key';

class Piano extends Component {
    constructor(props) {
        super(props);
        const reverb = new Tone.Freeverb(0.7).toMaster();
        const filter = new Tone.Filter().toMaster();
        this.synth = new Tone.PolySynth()
            .chain(filter)
            .chain(Tone.Master)
            .chain(reverb)
            .chain(filter)
            .toMaster();
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

    noteOn = note => {
        this.synth.triggerAttackRelease(note);
    };
    noteOff = note => {
        this.synth.triggerRelease(note);
    };
    render() {
        if (this.props.pianoKey) {
            console.log(this.props.pianoKey);
            this.synth.triggerAttackRelease(
                this.keyTranslation[this.props.pianoKey]
            );
        }
        const keyList = Object.values(this.keyTranslation).map(key => (
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
