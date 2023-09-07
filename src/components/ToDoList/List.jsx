import React from 'react'
export default function List(props) {
    const removeHandler=(e)=>{
        console.log(e.target.closest('h1'));
        props.onRemove()

    }
  return (
      <div className="List-item p-2 h-11 shadow-md flex flex-row items-center justify-between" >
          <h1 className='bg-white px-2 py-2'>{props.title}</h1>
          <div className="btn">
              <button className='bg-blue-600 p-2 cursor-pointer'>check</button>
              <button className='bg-red-600' onClick={(e)=>removeHandler(e)}>remove</button>
          </div>
      </div>
  )
}
