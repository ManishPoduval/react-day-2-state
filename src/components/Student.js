import React from 'react'


function Student(props){
    let myStyles = {
        border: '1px solid black', 
        backgroundColor: props.color
    }
  
    return (
        <div style={myStyles}>
            <p>{props.name}</p>
            <p>He is from {props.location}</p>
            <button onClick={() => {props.delete(props.name)}}>Delete</button>
            {/* <button onClick={props.delete}>Delete</button> */}
        </div>
    )
}

export default Student;