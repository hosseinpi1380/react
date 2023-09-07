import React from 'react'
export default function Book(props) {
  return (
    <tr key={props.name} className='border-b-2 py-2'>
        <td>{props.title}</td>
        <td>{props.author}</td>
        <td>{props.year}</td>
    </tr>
  )
}
