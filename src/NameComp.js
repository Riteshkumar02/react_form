import React from 'react'

export default function 
NameComp(props) {
let name="hi "+props.name
    return (
    <div>
        <h2>hlo {name} {props.lname}</h2>
        {props.children}
    </div>
  )
}
