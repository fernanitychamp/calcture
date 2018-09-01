import React, { Component } from 'react';
import './App.css';

import TemperatureStatement from '../components/TemperatureStatement/TemperatureStatement';
import TemperatureInput from '../components/TemperatureInput/TemperatureInput';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText: ''
        }

        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(e) {
        this.setState({ inputText: e.target.value })
    }

    render() {
        return (
            <div className="App">
                <h2>Welcome to {this.props.appname}</h2>
                <TemperatureInput value={this.state.inputText} changed={this.handleInput} />
                <TemperatureStatement temperature={this.state.inputText} />
            </div>
        );
    }
}

export default App;
