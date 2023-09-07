import React, { useState } from 'react'
import List from './List';
import '../../index.css';
export default function MainToDoList() {
    let [lists, setLists] = useState([]);
    const [typing, setTyping] = useState('');
    const changeHandler = (e) => {
        setTyping(prev => prev = e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setLists(prev => prev = [...prev, typing]);
    }
    const removeToDo = (todo) => {
        setLists(prev => {
            let newList = prev.filter(el => {
                return el !== todo
            })
            return newList
        })
    }
    return (
        <>
            <h1 className='uppercase text-xl'>sabzlearn todo list</h1>
            <form className='w-full' onSubmit={submitHandler}>
                <input type="text" className='input-todo' onChange={(event) => changeHandler(event)} />
                <button className='input-btn'>add</button>
            </form>
            {lists.map((list, index) => <List key={index} title={list} onRemove={(todo) => removeToDo(todo)} />)}
        </>
    )
};
