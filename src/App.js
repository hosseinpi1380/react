import React, { useState, useCallback, memo, useMemo } from 'react';
import './index.css';
export default function App() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(5000)

  const ageHandler = useCallback(() => {
    console.log('age increacment');
    setAge(age + 1)
  },[age])

  const salaryHandler = useCallback(() => {
    console.log('salary increament');
    setSalary(salary - 1)
  },[salary])
  return (
    <>
      <TitleComponent />
      <Count text='age' count={age} />
      <Button handler={ageHandler} text='age' />
      <Count text='salary' count={salary} />
      <Button handler={salaryHandler} text='salary' />
    </>
  )
}
const Button = memo(({ handler, text }) => {
  console.log('rendering button',handler);
  return (
    <>
      <button onClick={handler} className={`btn ${text === 'age' ? 'add' : 'min'}`}>
        {text}</button>
    </>
  )
})
const TitleComponent = memo(() => {
  console.log('title component');
  return (
    <>
      <h1>title component</h1>
    </>
  )
})
const Count = memo(({ text, count }) => {
  console.log('count component did update');
  return (
    <h1>{text} -{count}</h1>
  )
})
