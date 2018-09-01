import React, { Component } from 'react';
import './App.css';

import TemperatureStatement from '../components/TemperatureStatement/TemperatureStatement';
import TemperatureInput from '../components/TemperatureInput/TemperatureInput';


class App extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            temperature: '',
            scale: ''
        }

        this.handleCelsiusInput = this.handleCelsiusInput.bind(this)
        this.handleFahrenheitInput = this.handleFahrenheitInput.bind(this)
    }

    convert(scale, temperature) {
        const input = parseFloat(temperature)
        let temp = 0

        if (Number.isNaN(input)) {
            return ''
        }
    
        if (scale === 'c') { // convertir a celsius
            temp = (input - 32) * 5 / 9
        }    
        if (scale === 'f') { // convertir a fahrenheit
            temp = (input * 9 / 5) + 32
        } 
        let rounded = Math.round(temp * 1000 / 1000)
        return rounded.toString()
    }

    handleCelsiusInput(temperature) {
        this.setState({ scale: 'c', temperature })
    }

    handleFahrenheitInput(temperature) {
        this.setState({ scale: 'f', temperature })
    }


    render() {
        let scale = this.state.scale
        let temperature = this.state.temperature

        let celsius = scale === 'f' ? this.convert('c', temperature) : temperature
        let fahrenheit = scale === 'c' ? this.convert('f', temperature) : temperature

        return (
            <div className="App">
                <h2>{this.props.appname}</h2>
                <div>
                    <TemperatureStatement temperature={ scale === 'c' ? parseFloat(celsius) : parseFloat(fahrenheit) } />
                </div>
                <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={this.handleCelsiusInput} />
                <TemperatureInput scale='f' temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitInput} />
            </div>
        );
    }
}

export default App;
