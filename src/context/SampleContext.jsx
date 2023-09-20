import React, { createContext, useContext, useState } from 'react'
export const SampleContext = createContext();
export const UpdateContext = createContext();
export const DataContext = createContext();

export function useSample() {
    return useContext(SampleContext)
}
export function useUpdate() {
    return useContext(UpdateContext)
}
export function useData(){
    return useContext(DataContext)
}

const SampleProvider = ({ children }) => {
    const [theme, setTheme] = useState(false)
    const [data, setData] = useState([
        { id: 1, name: 'hossein', fname: 'pirasbaghi', age: '22' },
        { id: 2, name: 'ali', fname: 'bagheri', age: '26' },
        { id: 3, name: 'amir', fname: 'ahmadi', age: '25' },
    ]);
    const themeToggle = () => {
        setTheme(prev => !prev)
    }
    return <SampleContext.Provider value={theme}>
        <UpdateContext.Provider value={themeToggle}>
            <DataContext.Provider value={data}>
                {children}
            </DataContext.Provider>
        </UpdateContext.Provider>
    </SampleContext.Provider>
}
export { SampleProvider }