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
        return;
    }
}
export default Key;
