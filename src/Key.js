import React from 'react';
import Tone from 'tone';

import Piano from './Piano';

class Key extends React.Component {
    noteOn() {
        console.log(`turn note on with pitch ${this.props.pitch}`);
    }

    noteOff() {
        console.log(`turn note off with pitch ${this.props.pitch}`);
    }
    render() {
        return <button>click me</button>;
    }
}
export default Key;

// let synth = new Tone.Poly().toMaster();

// //attach a listener to all of the buttons
// document.querySelectorAll('button').forEach(function (button) {
//     button.addEventListener('mousedown', function (e) {
//         //play the note on mouse down
//         synth.triggerAttack(e.target.textContent);
//     });
//     button.addEventListener('mouseup', function (e) {
//         //release on mouseup
//         synth.triggerRelease();
//     });
// });
