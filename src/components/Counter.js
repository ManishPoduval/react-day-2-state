import React from 'react';

function Counter(props){
    return <div>
            <p>Count is {props.counter}</p>
            <button onClick={props.doClick} >Click</button>
        </div>
}

export default Counter;