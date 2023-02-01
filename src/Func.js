import React from 'react'
import ClassComp from './ClassComp'

export default function Func(props) {
  return (
    <div>Funcional Component also known as {props.sc}<br/>
        <ClassComp sc="It is declared in F.C" />

    </div>
    
  )
}
