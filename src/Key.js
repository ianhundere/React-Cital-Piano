import React, { Component } from 'react';
// import Tone from 'tone';

// import Piano from './Piano';

class Key extends Component {
    render() {
        return (
            <button
                onMouseDown={() => this.props.noteOn(this.props.note)}
                onMouseUp={() => this.props.noteOff(this.props.note)}
                onKeyDown={() => this.props.noteOn(this.props.note)}
                onKeyUp={() => this.props.noteOff(this.props.note)}
            >
                {this.props.note}
            </button>
        );
    }
}
export default Key;
