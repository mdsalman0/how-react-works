import React, { useEffect, useState } from 'react';

const Count = () => {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCount(count + 1)
        },1000)
    })
    return (
        <div>
            <h2>I have rendered {count} times!</h2>
        </div>
    );
};

export default Count;