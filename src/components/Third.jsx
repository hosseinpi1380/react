import React, { useContext } from 'react'
import UsernameContext from '../context/Username'
const Third = () => {
    const third = useContext(UsernameContext)
    console.log(third);
    return (
        <>
            <h3>Thrid {third}</h3>
        </>
    )
}

export default Third