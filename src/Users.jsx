import React,{useState} from 'react'

const Users = () => {
    const [value, setValue] = useState([
        { id: 1, name: 'hossein', age: '22' },
        { id: 2, name: 'ali', age: '22' },
        { id: 3, name: 'amir', age: '22' },
        { id: 4, name: 'amin', age: '22' }
    ]);
    return (
        <>
            {value.map(el => (<div key={el.id}>{el.name}</div>))}
        </>
    )
}

export default React.memo(Users)