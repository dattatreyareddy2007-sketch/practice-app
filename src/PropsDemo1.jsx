import React from 'react'

export default function PropsDemo1(props) {
  return (
    <div>
        a={props.a}
        name={props.txt}
        Emp Id={props.emp.id}
        Emp name={props.emp.name}
        
        
    </div>
  )
}
