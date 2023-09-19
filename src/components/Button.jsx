import React, { useState } from 'react'
const Button = (props) => {
    const { menu, active,changeMenu } = props
    
    return (
        <>
            <div className="category-btn flex-row flex justify-between">
                {menu.map(value =>
                    <button key={value} 
                    onClick={()=>changeMenu(value)} 
                    className={value === active ? 'active' : 'btn'}
                    >{value}</button>)}
            </div>
        </>
    )
}
export default Button