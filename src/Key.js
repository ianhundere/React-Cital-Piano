import React, { Component } from 'react';

import './index.css';

class Key extends Component {
    render() {
        return (
            <div className="container">
                <button
                    className="key"
                    onMouseDown={() => this.props.noteOn(this.props.note)}
                    onMouseUp={() => this.props.noteOff(this.props.note)}
                    onKeyDown={() => this.props.noteOn(this.props.note)}
                    onKeyUp={() => this.props.noteOff(this.props.note)}
                >
                    {this.props.note}
                </button>
            </div>
        );
    }
}
export default Key;
