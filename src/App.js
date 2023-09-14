import React, { useEffect, useState } from 'react';
import './index.css';
import FilterNotes from './FilterNote';
export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNotes, setNewNotes] = useState('')
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])
  const addHandler = () => {
    let obj = {
      id: notes.length + 1,
      title: newNotes.toLowerCase()
    }
    setNotes(prev => [...prev, obj])
    setNewNotes('')
  }
  const hadnleThemeSwith = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      
    </>
  )
}

