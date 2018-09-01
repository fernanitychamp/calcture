import React from 'react';

const temperatureInput = (props) => {
    let scaleName = {
        c: 'Celsios',
        f: 'Fahrenheit'
    }

    return (
        <fieldset style={{ margin: '10px' }}>
            <legend>Digite la temperatura en {scaleName[props.scale]}</legend>
            <input type='text' value={props.temperature} placeholder='Type a number' onChange={(e) => props.onTemperatureChange(e.target.value)} />
        </fieldset>
    )

}


export default temperatureInput;