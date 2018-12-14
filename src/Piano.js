import React from 'react';
import Tone from 'tone';

import Key from './Key';

var synth = new Tone.PolySynth().toMaster();

//attach a listener to all of the buttons
document.querySelectorAll('button').forEach(function(button) {
    button.addEventListener('mousedown', function(e) {
        //play the note on mouse down
        synth.triggerAttack(e.target.textContent);
    });
    button.addEventListener('mouseup', function(e) {
        //release on mouseup
        synth.triggerRelease();
    });
});

class Piano extends React.Component {
    constructor(props) {
        super(props);

        this.state = { synth: new Tone.PolySynth().toMaster() };
    }
    componentDidUpdate(props) {}

    render() {
        return <Key synth={this.state.synth} pitch="C3" />;
    }
}

export default Piano;
