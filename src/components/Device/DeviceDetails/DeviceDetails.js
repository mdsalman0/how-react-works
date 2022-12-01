import React from 'react';

const DeviceDetails = (props) => {
    return (
        <div style={{border: '2px solid blue',margin:'10px'}}>
            <h1>Price: {props.price}</h1>
        </div>
    );
};

export default DeviceDetails;