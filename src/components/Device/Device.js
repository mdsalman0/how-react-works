import React from 'react';

const Device = (props) => {
    return (
        <div style={{border: '2px solid red',margin:'10px'}}>
            <h2>I have: {props.name}</h2>
            <p>price: {props.price}</p>
        </div>
    );
};

export default Device;