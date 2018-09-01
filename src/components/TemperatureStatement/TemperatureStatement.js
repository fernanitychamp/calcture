import React from 'react';

const temperatureStatement = (props) => 
    <span style={{marginLeft: '10px'}}>{props.temperature >= 100 ? 'Esta hirviendo' : 'Aun no hierve'}</span>

export default temperatureStatement;