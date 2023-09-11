import React from 'react';
import Features from '../components/Features';
import Chart from '../components/Chart';
import WidgetSm from '../components/Widget';

export default function Home() {
  return (
    <div className='flex flex-col overflow-hidden mx-auto w-4/5 max-lg:w-full'>
      <Features />
      <Chart />
      <WidgetSm/>
    </div>
  )
}
