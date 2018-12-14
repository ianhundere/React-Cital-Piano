import React, { Component } from 'react';
import Piano from './Piano';

import './App.css';

class App extends Component {
    constructor(props) {
        console.log(document);
        super(props);
        this.state = {
            key: ''
        };
    }
    componentDidMount() {
        document.addEventListener('keydown', e => {
            this.setState({
                key: e.key
            });
            console.log(e.key);
        });
    }
    render() {
        return (
            <div className="App">
                <Piano pianoKey={this.state.key} />
            </div>
        );
    }
}

export default App;
