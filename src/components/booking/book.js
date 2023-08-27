import React from 'react'
import '../index.css'
export default function Book(props) {
  return (
    <tr className='border-b-2 py-2'>
        <td>{props.title}</td>
        <td>{props.author}</td>
        <td>{props.year}</td>
    </tr>
  )
}
