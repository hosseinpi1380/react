import React from 'react'
import { useData, useSample, useUpdate } from '../context/SampleContext'
const Function = () => {
    const sample = useSample();
    const update = useUpdate();
    const data = useData();
    console.log(sample);
    return (
        <>
            <div className={sample ? 'bg-cyan-700' : 'bg-cyan-600'}>
                <h1>hello world</h1>
            </div>
            <ul>
                {data.map(el => (<li key={el.id}>{el.name}</li>))}
            </ul>
            <button className='px-2 py-4' onClick={update}>toogle</button>
        </>
    )
}

export default Function