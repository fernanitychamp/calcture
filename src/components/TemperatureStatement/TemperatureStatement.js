import React from 'react';

const temperatureStatement = (props) => {
    if (props.temperature >= 100)
        return <span>El agua hierve a {props.temperature} grados</span>
    else if (props.temperature <= 100)
        return <span>Aun no hierve el agua a {props.temperature} grados</span>
    else 
        return <span></span>
    
}

export default temperatureStatement;