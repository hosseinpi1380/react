import React from 'react'
import { Tooltip } from 'react-bootstrap';
import { LineChart, Line, CartesianGrid, XAxis, ResponsiveContainer, YAxis } from 'recharts';
const Info = [
  { name: '1', mount: 1000 },
  { name: '2', mount: 400 },
  { name: '3', mount: 800 },
  { name: '4', mount: 125 },
  { name: '5', mount: 375 },
  { name: '6', mount: 952 },
  { name: '7', mount: 55 },
  { name: '8', mount: 420 },
  { name: '9', mount: 100 },
  { name: '10', mount: 700 },
];
const Chart = () => {
  return (
    <>
      <div className='shadow-md'>
        <h1 className='uppercase font-semibold'>recharts</h1>
        <ResponsiveContainer width='100%' aspect='5'>
          <LineChart width={730} height={250} data={Info}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis/>
            <Tooltip/>
            <Line type="monotone" dataKey="mount" stroke="#8884d8"/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}
export default Chart;