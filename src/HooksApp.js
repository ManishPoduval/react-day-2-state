import React, {useState} from 'react';

function HooksApp(){

    const [count, handleClick] = useState(0);

    return <div>
            <p>Count is {count}</p>
            <button onClick={() => handleClick(count+1)} >Click</button>
        </div>
}

export default HooksApp;