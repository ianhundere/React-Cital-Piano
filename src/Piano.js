import React from 'react';
import Tone from 'tone';

import Key from './Key';

class Piano extends React.Component {
    constructor(props) {
        super(props);

        this.state = { synth: new Tone.PolySynth().toMaster() };
    }
    play(note) {
        this.synth.triggerAttack(note);
    }
    release() {
        this.synth.triggerRelease();
    }
    // componentDidUpdate(props) {}

    render() {
        return (
            <div>
                <button>
                    <Key synth={this.state.synth} pitch="C3" />
                </button>
                <p>yo</p>
            </div>
        );
    }
}

export default Piano;
