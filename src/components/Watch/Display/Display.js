import React from 'react';
import Dial from '../../Device/Dial/Dial';

const Display = (props) => {
    console.log(props.steps);
    return (
        <div style={{border: '2px solid lightblue',margin:'10px'}}>
            <h3>Name: {props.name}</h3>
            <h4>Steps so far: {props.steps}</h4>
            <Dial steps={props.steps}></Dial>
        </div>
    );
};

export default Display;