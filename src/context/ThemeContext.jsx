import React, { createContext, useContext, useState } from "react";
const themeContext = createContext();
//cosutme hook//
export const useThemeContext = () => {
    return useContext(themeContext)
}

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [data, setData] = useState([
        { id: 1, name: 'hossein', fname: 'pirasbaghi', age: '22', img: '/img/gallery-img-3.jpeg', count: 1 },
        { id: 2, name: 'ali', fname: 'bagheri', age: '26', img: '/img/nat-10.jpg', count: 1 },
        { id: 3, name: 'amir', fname: 'ahmadi', age: '25', img: 'img/nature1.jpg', count: 1 },
    ]);
    const [basket, setBasket] = useState([]);
    const closeToast = () => {
        setShowToast(false)
    }
    const addToBasket = () => {
        setShowToast(true)
    }
    const changeTheme = () => {
        if (!theme) {
            document.documentElement.classList.add('dark')
        }
        else { document.documentElement.classList.remove('dark') }
        setTheme(prev => !prev)
    }
    return <themeContext.Provider value={{
        theme, showToast, data, closeToast, addToBasket, changeTheme
        , basket, setBasket
    }}>
        {children}
    </themeContext.Provider>
}
export { ThemeProvider, themeContext };