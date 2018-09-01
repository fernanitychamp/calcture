import React from 'react';

const temperatureInput = (props) => 
    <input type='text' value={props.value} placeholder='Type a number' 
        onChange={props.changed} />

export default temperatureInput;