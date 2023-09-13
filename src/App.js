import React, { useEffect, useMemo, useState } from 'react';

import './index.css';

export let isday = false;
export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNotes, setNewNotes] = useState('')
  const [theme,setTheme]=useState('light');
  useEffect(()=>{
    if(theme==='dark'){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  },[theme])
  const addHandler = () => {
    let obj = {
      id: notes.length + 1,
      title: newNotes.toLowerCase()
    }
    setNotes(prev => [...prev, obj])
    setNewNotes('')
  }
 const hadnleThemeSwith=()=>{
  setTheme(theme==='dark'?'light':'dark')
 }
  return (
    <>
      <div className='shadow-lg p-4 dark:bg-slate-800 dark:text-white rounded-md max-sm:text-sm max-sm:font-normal max-sm:h-4/5'>
        <button onClick={hadnleThemeSwith} className={theme === 'dark' ? '' : 'hidden'}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
        </button>
        <button className={theme === 'dark' ? 'hidden' : ''} onClick={hadnleThemeSwith}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
        </button>
        <input type="text" value={newNotes} placeholder='new note'
          onChange={e => setNewNotes(e.target.value)}
        />
        <button className='bg-yellow-500 p-4 rounded-full ml-4 shadow-md hover:shadow-
         hover:scale-90 duration-100' onClick={addHandler}>add</button>
        <h1 className='text-xl uppercase font-semibold'>all notes</h1>
        <ul>
          {notes.map(note => <li key={note.id}>{note.id}-{note.title}</li>)}
        </ul>
        <hr />
        <h1 className='text-xl uppercase font-semibold'>js include notes</h1>
        {useMemo(() =>
          notes.filter(note => note.title.includes('js'))
            .map(el => <div key={el.id}>{el.title}</div>)
          , [notes])}
        
      </div>
    </>
  )
}
