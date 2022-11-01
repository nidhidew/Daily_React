import React from 'react'

function Greetings(props) {
    console.log(props);
    return <h1>Hello {props.name}</h1>
}


export default Greetings;