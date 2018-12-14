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
        let keys = [
            'B3',
            'C4',
            'D4',
            'E4',
            'F4',
            'G4',
            'A4',
            'B4',
            'C5',
            'D5',
            'E5',
            'F5',
            'G5'
        ];
        let keyList = keys.map(key => (
            <Key
                onPress={() => this.play(this)}
                onRelease={() => this.release(this)}
                note={key}
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
