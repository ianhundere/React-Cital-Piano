import React from 'react';
import Tone from 'tone';

import Key from './Key';

class Piano extends React.Component {
    render() {
        const reverb = new Tone.JCReverb(0.7).toMaster();
        const noteOn = note => {
            synth.triggerAttackRelease(note);
        };
        const noteOff = note => {
            synth.triggerRelease(note);
        };
        const synth = new Tone.PolySynth()
            .chain(Tone.Master)
            .chain(reverb)
            .toMaster();

        const keys = [
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
        const keyList = keys.map(key => (
            <Key
                key={key}
                synth={synth}
                note={key}
                noteOn={noteOn}
                noteOff={noteOff}
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
