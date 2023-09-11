import React from 'react'
import { useParams } from 'react-router-dom'
const IdUser = () => {
    const {id}=useParams();
    console.log(id);
  return (
    <div>IdUser</div>
  )
}

export default IdUser